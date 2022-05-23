
<template>
  <div class="content">
    <div class="stars">
        <h1>{{perso.name}}</h1>
        <h2>{{perso.birth_year}}</h2>
        <h3>{{perso.homeworld}}</h3>
            <div class="test_film">Films : 
              <ul>
                <li v-for="(f, index ) in films" :key="index"> 
                  {{ f.title }} 
                </li>
              </ul>
            </div>
    </div>
  </div>
</template>

<script>
import service from '../storejs/store.js';


export default {
  name: 'MaFiche',
  props: {
    
  },
    data () {
        return {
        perso: {},
         homeworlds: {},
        films : [],
        }
    },
 
    methods:{
        getPeopleID(){
            service.getPeopleID(this.$route.params.id).then(
                response => 
                {
                    this.perso = response.data
                    console.log(this.perso.homeworld)
                }
                )
        },
        getHomeworld(){
            service.getHomeworld(this.perso.homeworld).then(
            response => {
            this.homeworlds = response.data
            }
            );
        }
    },
  
        
    
   /* this.personnage.films.map( d => 
            Store.getMovie(d).then(
            response => ( this.films.push(response.data))
        )
    )*/
  
   
    created(){
        this.getPeopleID() 
        this.getHomeworld()
    }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
