<template>

      <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
      -->

      <div class="grid-container">
        <div class="item1">by @{{ author}}</div>
        <div class="item2"></div>
        <div class="item3"></div>  
        <div class="item4">{{ title }}</div>
        <div class="item5">test</div>
        <div class="item6"></div>
        <div class="item7"></div>
      </div>

</template>

<script>

export default {
  name: 'PostSummary', //this is the name of the component
  props: ['author', 'title', 'authorperm', 'headline']


}
</script>
<style>

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
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
  background-color: white;
  padding: 2px;
  width: 1000px;
  margin: 20px auto;
  border-top-style: dotted;
  border-width: 1px;
}


.item1 {
  grid-column-start: 1;
  grid-column-end: 4;
  font: normal 12px American Typewriter;
  background-color: white;
  border-style: solid;
}

.item3 {
  grid-row-start: 2;
  grid-row-end: 5;
  font: normal 12px American Typewriter;
  background-color: white;
  border-style: solid;
}

.item4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 5;
  font: normal 12px American Typewriter;
  background-color: white;
  text-align: left;
  border-style: solid;
}

.item5 {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
  font: normal 12px American Typewriter;
  background-color: white;
  text-align: left;
  border-style: solid;
}


</style>