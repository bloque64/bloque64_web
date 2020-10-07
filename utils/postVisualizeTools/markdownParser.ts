/*
NOTE:
  We got the mess here. We use two different libraries to similar porpose. This is bad.
  We need to fix it.
*/

import { Marked, Renderer } from '@ts-stack/markdown'
import { JSDOM } from 'jsdom'
import sanitizeConfig, { config } from '~/config'
import { IParserSummaryText, 
         IParserFullText,
         IRenderCleanText, IStringify } from "~/utils/interfaces";
import sanitize from 'sanitize-html'
import xmldom from 'xmldom'
const { Remarkable } = require('remarkable')

const DOMParser = new JSDOM().window.DOMParser
const parser = new DOMParser()

const noop = () => {};
const DOMParserXML = new xmldom.DOMParser({
    errorHandler: { warning: noop, error: noop },
});
const XMLSerializer = new xmldom.XMLSerializer();

Marked.setOptions({
    renderer: new Renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  })

export const remarkable = new Remarkable({
    html: true, // remarkable renders first then sanitize runs...
    breaks: true,
    linkify: false, // linkify is done locally
    typographer: false, // https://github.com/jonschlinkert/remarkable/issues/142#issuecomment-221546793
    quotes: '“”‘’',
});

export const remarkableToSpec = new Remarkable({
  html: true,
  breaks: false, // real markdown uses \n\n for paragraph breaks
  linkify: false,
  typographer: false,
  quotes: '“”‘’',
});

export default Marked

export function prepareText(document: Document, style_by_tag: { [x: string]: any }= {}) {
  DFS(document.firstChild)
  //console.log("In the prepareText the style_by_tag ", style_by_tag)
  for (const key in style_by_tag){
   console.log("In the prepareText the key ", document.getElementsByTagName(key)) 
   const tags = Array.prototype.slice.call(document.getElementsByTagName(key))
   tags.forEach((tag: Element) => {tag.setAttribute("class", style_by_tag[key]) })
  }
}

function proxifyImages(doc: Document): void {
  if (doc){
    for (const oldIMG of doc.querySelectorAll('iframe') ) {
      const newImg = doc.createElement('img')
      newImg.setAttribute('src', oldIMG.getAttribute('src') || '' )
      oldIMG.parentNode?.insertBefore(newImg, oldIMG)
      oldIMG.parentNode?.removeChild(oldIMG)
    }
  }
}


function DFS(node: ChildNode | null ) {
  if (!node || !node.childNodes) return;
  for (const child of Array.from(
    node.childNodes
  )) {
    if (child.nodeName === "#text")
      linkifyNode(child)
    DFS(child)
  }
}

function linkifyNode(child: ChildNode): void {
  const content = linkify(XMLSerializer.serializeToString(child))
  if (content !== null){
    const newChild = DOMParserXML.parseFromString(
      `<span>${content}</span>`
    );
    child.parentNode?.replaceChild(newChild, child);
  }
}

function linkify(data: string): string | null{
  return new RegExp('.*\.jpg|png|gif').test(data) ? `<b-img src=${data} />` 
  :null
}


function proxifyImageUrl(url: string): string {
  return config.img_proxy_prefix + url
}

export class parserSummary implements IParserSummaryText, 
                                      IParserFullText,
                                      IRenderCleanText,
                                      IStringify {

  parseFullText(document: string, style_by_tag: { [x: string]: any }= {}): Document {
    const markdownToHtml = remarkable.render(document)
    const firstTag = markdownToHtml.indexOf('<html>') === 0 ? ['', ''] :
    ['<html>', '</html>']  || ['', '']
    const parsedHtml = DOMParserXML.
    parseFromString(firstTag[0] + markdownToHtml + firstTag[1], 'text/html')
    prepareText(parsedHtml, style_by_tag)
    return parsedHtml
  }
  parseSummaryText(document: string): Document {
    const markdownToHtml = Marked.parse(document)
    const parsedHtml = parser.parseFromString(markdownToHtml, 'text/html')
    const links = parsedHtml.getElementsByTagName('a')
    while (links[0]) {
      if (links[0].parentNode) {
        links[0].parentNode.removeChild(links[0])
      }
    }
    return parsedHtml
  }

  stringifyFullContent(document: Document) : string {
    return XMLSerializer.serializeToString(document)
  }
  stringifyContent(document: Document) : string {
    return document.body.textContent || ''   
  }
  renderCleanText(document: Document): string{
    return sanitize(
      XMLSerializer.serializeToString(document)
    )
  }
}
