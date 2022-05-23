
<template>
  <div class="content_perso">
    <div class="contenu">
        <div class="test1">
           <div>{{personnage.name}}</div> 
        </div>
        <div class="test2">
            <div class="test">Année de naissance : {{personnage.birth_year}} </div>
            <div class="test">taille : {{personnage.height}} cm</div>
            <div class="test">poids : {{personnage.mass}} kg</div>
            <div class="test">genre : {{personnage.gender}}</div>
            <div class="test">espece : {{personnage.gender}}</div>
            <div class="test">skin : {{personnage.skin_color}}</div>
            <div class="test">couleur des cheveux : {{personnage.hair_color}}</div>
            <div class="test">couleur des yeux : {{personnage.eye_color}}</div>
            <div class="test">planete : {{ homeworld.name }}</div>
            <div class="test_film">Films : 
              <ul>
                <li v-for="(f, index ) in films" :key="index"> 
                  {{ f.title }} 
                </li>
              </ul>
            </div>
            <div class="test_plus" @click="goToPersonnage()"> Voir plus</div> 
        </div>
    </div>
  </div>
</template>

<script>
import Store from "../storejs/store.js" ;

export default {
  name: 'MonPerso',
  props: {
    msg: String,
    personnage: Object,
  },
    data () {
        return {
            homeworld: {},
            films : [],
            id: new URL(this.personnage.url).pathname.split('/')[3]
        }
    },
    methods:{
      goToPersonnage(){
        this.$router.push('/personnage/' + this.id);
        console.log(this.id);
      }
    },
   
  mounted() {
    Store.getHomeworld(this.personnage.homeworld).then(
        response => ( this.homeworld = response.data)
    );
    this.personnage.films.map( d => 
            Store.getMovie(d).then(
            response => ( this.films.push(response.data))
        )
    )

  }
}
</script>

<style lang="scss">
  @import "./perso.scss";
</style>