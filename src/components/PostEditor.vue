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




       <div class="editor">
        
        <form class ="news_form" id="posteditor_form" @submit.prevent="processForm">
                <label for="context">Epígrafe:</label><br>
                <textarea class = "formelements" width=10px name="context" rows="3" v-model="context"></textarea><br>
                <label for="healine">Titular:</label><br>
                <textarea class = "formelements" name="headline" cols="60" rows="2"></textarea><br>
                <label for="subtitle">Subtítulo:</label><br>
                <textarea class = "formelements" name="subtitle" cols="60" rows="2"></textarea><br>
                <label for="byline">Autor:</label><br>
                <input class = "formelements" name="byline" maxlength="70" size="70"><br><br>
                <label for="lead">Entradilla:</label><br>
                <textarea class = "formelements" name="lead" cols="60" rows="8"></textarea><br>
                <label for="body">Cuerpo:</label><br>
                <textarea class = "formelements" name="cuerpo" cols="60" rows="20"></textarea><br>
                <br>
                <button type="button" id="store">Guardar</button>
                <button type="submit" id="publish">Publicar</button>
            </form>
  
        </div>

</template>

<script>

    const dhive = require('@hiveio/dhive');
    //connect to server which is connected to the network/production
    const client = new dhive.Client('https://api.openhive.network');

    export default { 

        name: "PostEditor",

        data() {

            return {
                context: "" 

            }
        },

        methods: {

            processForm: function() {

                const key = dhive.PrivateKey.from('');

                console.log({ context: this.context});

                client.broadcast
                    .comment(
                        {
                            author: '',
                            body: this.context,
                            json_metadata: '',
                            parent_author: '',
                            parent_permlink: '',
                            permlink:"permperkdom",
                            title: 'title'
                        },
                        key
                    )
                    .then(
                        function(result) {
                            console.log("Comment included in block " + result.block_num);
                        },
                        function(error) {
                            console.error(error);
                            alert(error);
                        }
                     );
                //alert(this.context);
            }
        }
    }

</script>

<style>

.editor {

  margin: 0px;
  padding: 20px;
  font: normal 14px American Typewriter;
  border-left: 1px;
  border-right: 1px;
  border-top: 1px;
  border-botton: 10px;
  border-width: 1px;
  width: auto;
  margin: auto auto;
  border-style: 1px solid black;
  border-top: 1px dotted black;


}

.form_title {


    width: 700px;
    margin: 0px;
    border: 1px dotted white;

}

.news_form {

    width: 700px;
    background-color: rgb(205, 205, 205);
    padding: 20px;
    border: 1px dotted black;
    margin: 0 auto;


}  

.formelements {


    width: 100%;
    
}

</style>