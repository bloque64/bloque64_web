import { Renderer } from '@ts-stack/markdown'

class markdownRenderer extends Renderer {
  html (html: string): string {
    return ''
  }
}
