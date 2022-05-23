const axios = require('axios');

const HAPPY = "https://swapi.dev/api/";

let Store = {
 getPeople(){
     return axios.get(HAPPY+"people/");
 },
 getPeopleID(id){
     return axios.get(HAPPY+"people/"+id);
 },
 getPage(number){
     return axios.get(HAPPY +"people/?page="+number)
 },
 getSpecies(link){
    return axios.get(link)
 },
 getHomeworld(link){
    return axios.get(link)
 },
 getMovie(link){
    return axios.get(link)
 }
}

export default Store;