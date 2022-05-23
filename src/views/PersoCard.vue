<template>
  <div class="content" > 
    <div>
        <input v-model="larecherche" placeholder="Rechercher" id="searchfield"/>
    </div>
    <div class="stars" v-for="(perso, index) in searchVal" :key="index">
      <div class="bloc" @click="showModal(perso)" >
         <p class="pointeur">{{perso.name}}</p> 
      </div>
    </div>
      <div class="align">
        <div class="previous" @click="previous()">
          <h3>PREVIOUS</h3>
      </div>
      <div class="now">
          <h3>{{this.numberpage}}</h3>
      </div>
      <div class="next" @click="next()">
          <h3>NEXT</h3>
      </div>
    </div>
    <div class="croix" v-if="displayModal" @click="hideModal(perso)"> X </div>
    <MonPerso v-if="displayModal" :personnage="persoToShow"/>
  </div>
</template>

<script>
import Store from "../storejs/store.js" ;
// @ is an alias to /src
import MonPerso from '@/components/MonPerso.vue'

export default {
  name: 'PersoCard',
   components: {
    MonPerso,
  },
  props: {
    msg: String,
    
    
  },
  data () {
    return {
      persos: [],
      numberpage: 1,
      persoToShow: {},
      displayModal: false,
      homeworlds: [],
      larecherche: ""
    }
  },
  computed:{
    searchVal(){
      if(this.larecherche){
          return this.persos.results.filter((perso)=>{
            return this.larecherche.toLowerCase().split(' ').every(v => perso.name.toLowerCase().includes(v))
          }
        )
      } 
      else 
      {
        return this.persos.results;
      }
    }
  },
  methods:{

    previous(){
      if(this.numberpage<=1){
       this.numberpage = 1
      }
      else{
         this.numberpage = this.numberpage-1
      }
      Store.getPage(this.numberpage)
      .then(response => (this.persos = response.data))
    },

    next(){
       if(this.numberpage>=9){
       this.numberpage = 9
      }
      else{
         this.numberpage = this.numberpage+1
      }
      Store.getPage(this.numberpage)
      .then(response => (this.persos = response.data))
    },
    showModal(perso){
      this.persoToShow = perso;
      this.displayModal=true;
    },
     hideModal(perso){
      this.persoToShow = perso;
      this.displayModal=false;

    },
    PullHomeworld(link){
        return link;
      }
    },
  mounted() {
    Store.getPage(this.numberpage)
    .then(
      response => {
        this.persos = response.data;
        }
      )
  }
}

</script>

<style lang="scss">
  @import "./styleview.scss";
</style>