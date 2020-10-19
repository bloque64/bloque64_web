<template>

      <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>


      <div class="grid-container">
        <div class="item1">by @{{ author}}</div>
        <div class="item2"></div>
        <div class="item3"></div>  
        <div class="item4">{{ title }}</div>
        <div class="item5">test</div>
        <div class="item6"></div>
        <div class="item7"></div>
      </div>

     -->

      <div class="grid-container">
        <div class="item1">1</div>
        <div class="item2">2</div>
        <div class="item3">3</div>  
        <div class="item4">{{ category }}</div>
        <div class="item5">
            <span v-html="htmlBody"></span>
         </div>
      </div>


</template>

<script>

const dhive = require('@hiveio/dhive');
import {Remarkable} from 'remarkable';

const md = new Remarkable();
let markdown = md.render('# Remarkable ');
console.log(markdown);

let opts = {};

//connect to production server
opts.addressPrefix = 'STM';
opts.chainId =
    '0000000000000000000000000000000000000000000000000000000000000000';
//connect to server which is connected to the network/production
const client = new dhive.Client('https://api.openhive.network');


export default {
  name: 'PostSummary', //this is the name of the component
  props: ['author', 'title', 'authorperm', 'headline', 'body'],
  
 data() {

    return {
      loading: true,
      category: "",
      htmlBody: this.body
    }

 },

  created() {

    const author = "cyclope"
    const permlink = "de-lo-peor-a-la-bendicion"

    client.database.call('get_content', [author, permlink]).then(result => {
      
      const md = new Remarkable({ html: true});
      
      this.htmlBody = md.render(result.body);
      this.title = result.title;
      this.category = result.category;

      console.log(result.body);

      
    },
    
    );

    

  }

}
</script>

ç<style>

.post-summary {

  margin: 2px;
  padding: 10px;
  overflow: hidden;
  background-color: white;
  font: normal 14px American Typewriter;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  border-botton: 10px;
  border-width: 1px;
  width: 1000px;
  margin: 10px auto;
  border-style: 1px solid black;

}

.summary_title {

  margin: 2px;
  padding: 10px;
  background-color:gray;

}

.summary_headlines {
  margin: 2px;
  padding: 2px;
  background-color: white;

}

.grid-container {
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 2px;
  background-color: white;
  padding: 2px;
  width: 1000px;
  margin: 20px auto;
  border-top-style: dotted;
  border-width: 1px;
}


.item1 {
  
  font: normal 13px American Typewriter;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  grid-column-start: 1;
  grid-column-end: 3;
}

.item2 {

  font: normal 12px American Typewriter;
  background-color: white;
  border-style: solid;
    border-width: 2px;
  grid-row-start: 2;
  grid-row-end: 5;

}

.item3 {

  font: normal 12px American Typewriter;
  background-color: white;
  border-style: solid;
    border-width: 2px;
}

.item4 {

  font: normal 12px American Typewriter;
  background-color: white;
  text-align: left;
  border-style: solid;
    border-width: 2px;
}


.item5 {

  font: normal 12px American Typewriter;
  background-color: white;
  text-align: left;
  border-style: solid;
    border-width: 2px;

}



</style>