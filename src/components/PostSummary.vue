<template>

      <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
      -->

      <div class="grid-container">
        <div class="item1">@pgarcgo (76), Madrid</div>
        <div class="item2">2</div>
        <div class="item3">3</div>  
        <div class="item4">4</div>
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>
      </div>

</template>

<script>

export default {
  name: 'PostSummary', //this is the name of the component
  props: ['title', 'authorperm', 'headline']


}
</script>
<style>

.post-summary {

  margin: 2px;
  padding: 10px;
  overflow: hidden;
  background-color: white;
  font: normal 14px American Typewriter;
  border-style: dotted;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  border-botton: 1px;
  border-width: 1px;
  width: 1000px;
  margin: 10px auto;
  border: 1px dotted black;

}

.summary_title {

  margin: 2px;
  padding: 10px;
  background-color:gray;
  border: 1px dotted black;
}

.summary_headlines {
  margin: 2px;
  padding: 2px;
  background-color:rgb(223, 219, 219);
  border: 1px dotted black;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
  background-color: #2196F3;
  padding: 2px;
  width: 1000px;
  border: 1px dotted black;
  margin: 10px auto;
}


.item1 {
  grid-column-start: 1;
  grid-column-end: 4;
  font: normal 12px American Typewriter;
  background-color: white;
}

.item3 {
  grid-row-start: 2;
  grid-row-end: 5;
  font: normal 12px American Typewriter;
  background-color: white;
}

.item4 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 5;
  font: normal 12px American Typewriter;
  background-color: white;
}





</style>