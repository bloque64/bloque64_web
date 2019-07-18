<template>
    <div class="post-summary">
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
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
  padding: 10px;
  background-color:rgb(223, 219, 219);
  border: 1px dotted black;
}

</style>