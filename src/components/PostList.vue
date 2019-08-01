<template>
  <div>
    <h1>{{ category }}</h1>

    

      <b-container fluid class="bv-example-row">              
              <!-- <post-summary :title="post.title" /> -->
          <b-row>
            <b-col sm=3 cols=6 lg=2 order=2 order-sm=1 v-scroll>

                <!--
                <h5>Top Autores</h5>
                
                <b-list-group v-for="post in vots">
                    <b-list-group-item>{{post}}- @Blythe91</b-list-group-item>
                </b-list-group>
                -->
                 
            </b-col>

            <b-col cols=12 sm=6 lg=8 order=3 order-sm=1>
                <!--
                <b-row v-for="post in posts" v-bind:key="post.authorperm">
                  <b-col>
                    <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-left
                        tag="article"
                        
                        class="mb-2"
                      >
                        <b-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur provident deserunt quod rerum consectetur quibusdam, quam suscipit sunt exercitationem saepe dignissimos dolore libero, sed laborum eaque similique itaque cumque optio.
                        </b-card-text>
                
                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>

                    <b-card no-body class="overflow-hidden mb-2 mt-2" style="height: 10em">
                        <b-row no-gutters>
                          <b-col md="4" >
                            <b-card-img src="https://picsum.photos/400/400/?image=20" class=""></b-card-img>
                          </b-col>
                          <b-col md="6">
                            <b-card-body :title="post.title" title-tag="h6">
                              <b-card-text>
                                {{ post.json_metadata }}
                              </b-card-text>
                            </b-card-body>
                          </b-col>
                        </b-row>
                      </b-card>
                  </b-col>
                </b-row>
                -->

                <b-row>


                    <b-col cols=12>
                      
                      <b-card
                        title="Noticia Destacada"
                        title-tag="h1"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Imagen Destacada"
                        img-top
                        tag="div"
                        class="mb-2 mt-2"                        
                      >
                        <b-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur provident deserunt quod rerum consectetur quibusdam,
                        </b-card-text>
                        <b-button href="#" variant="outline-secondary btn-sm">Leer Mas</b-button>
                      </b-card>
                    </b-col>

                    <b-col lg=4 sm=6 cols=12 v-for="post in nums">
                        <b-card
                        :title="post+' Card Title'"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Imagen Destacada"
                        img-top
                        tag="div"
                        class="mb-2 mt-2"
                      >
                        <b-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur provident deserunt quod rerum consectetur quibusdam,
                        </b-card-text>
                        <b-button href="#" variant="outline-secondary btn-sm">Leer Mas</b-button>
                      </b-card>
                    </b-col>
                </b-row>
                v
            </b-col>

            <b-col cols=6 sm=3 lg=2 order=1 order-sm=3>
                <h5>Mas Votados</h5>
                <b-list-group v-for="post in vots">
                    <b-list-group-item>{{post}}- Lorem ipsum</b-list-group-item>
                </b-list-group>
            </b-col>

            <!--
            <b-col cols=4 sm=3>
                <h3>Top de post</h3>
                <b-list-group v-for="post in posts" >
                    <b-list-group-item>{{ post.title }}</b-list-group-item>
                    
                    
                </b-list-group>
            </b-col>
            -->
          </b-row>
      </b-container>
    
  </div>
</template>

<script>

//import ScottApi from '@/services/api/scott' 

// https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64

import axios from "axios"
import PostSummary from '@/components/PostSummary.vue'

export default {
  name: 'PostList', 
  props: ["category", "sort_by"],
  components: {
		'post-summary': PostSummary,

	},

  data() {

    return {
      loading: true,
      posts: [],

      nums: [1,2,3,4,5,6,7,8,9,0,
             1,2,3,4,5,6,7,8,9,0,
             1,2,3,4,5,6,7,8,9,0,
             1,2,3,4,5,6,7,8,9,0,
             1,2,3,4,5,6,7,8,9,0,],

      vots: [1,2,3,4,5,6,7,8,9,10,]

    }
  },

  created() {

    axios
      .get('https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64')
      .then(response => {
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      }).finally(() => this.loading = false)
  
  }

}
</script>
<style>
</style>