<template>

<!-- 

Partes de la noticia

Context - Epigrafe
Healine - Titular
Subtitle - Subtitulo
Byline -> Autor
Lead - Entradilla
Body - Cuerpo 

-->



  <div class="edit_post">
       <div class="edit_news">

        <form id="posteditor_form">
                <label for="context">Epígrafe:</label><br>
                <textarea name="context" cols="60" rows="3"></textarea><br>
                <label for="healine">Titular:</label><br>
                <textarea name="context" cols="60" rows="2"></textarea><br>
                <label for="subtitle">Subtítulo:</label><br>
                <textarea name="subtitle" cols="60" rows="2"></textarea><br>
                <label for="byline">Autor:</label><br>
                <input name="byline" maxlength="70" size="70"><br><br>
                <label for="lead">Entradilla:</label><br>
                <textarea name="lead" cols="60" rows="8"></textarea><br>
                <label for="body">Cuerpo:</label><br>
                <textarea name="cuerpo" cols="60" rows="20"></textarea><br>
            </form>
  
        </div>
  </div>
</template>

<script>

    export default { 

        name: "PostEditor",

        data() {

            return {
                title: "title"                    
            }
        }
    }

</script>

<style>
</style>