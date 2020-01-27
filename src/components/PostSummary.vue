<template>

      <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
      -->

      <div class="grid-container">
        <div class="item1">26.01.2020 - by @{{ author}} - Política</div>
        <div class="item2"></div>
        <div class="item3"><img src="https://steemitimages.com/p/C3TZR1g81UNaPs7vzNXHueW5ZM76DSHWEY7onmfLxcK2iQS78gsLNbkcRLHgrnxpJsmo4rh7Eon2vqKpZwfrm8p2KamJSsBkQhiCKeeAezdvKt8MugJosMx?format=match&mode=fit&width=200"></div>  
        <div class="item4">{{ title }} <br><br> Detrás de los cristales llueve y llueve. Sobre los chopos medio deshojados, sobre los pardos tejados, sobre los campos, llueve… Pero esta noche dejará de hacerlo para no mojar la alfombra roja de los Goya, en Málaga. Goya se llamaba el cine que en esta ciudad de cine estaba en la céntrica calle</div>
        <div class="item5">up | down / 256 BLQ   / 24 votos / 5 comments</div>
        <div class="item6"></div>
        

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
  grid-template-columns: auto auto;
  grid-gap: 2px;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 1000px;
  margin: 0px auto;
  border-bottom-style: dotted;
  border-width: 1px;

}

.item1 {

  font: normal 12px American Typewriter;
  background-color: white;
}


.item2 {

  font: normal 12px American Typewriter;
  background-color: white;

}



.item3 {

  font: normal 12px American Typewriter;
  background-color: white;
  padding-top: 5px;

}

.item4 {

  font: normal 12px American Typewriter;
  background-color: white;

}


.item5 {

  font: normal 12px American Typewriter;
  background-color: white;

}

.item6 {

  font: normal 12px American Typewriter;
  background-color: white;

}


</style>