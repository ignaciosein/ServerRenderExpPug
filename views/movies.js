const fetch = require('node-fetch');
const APIKey = "473627c5"
const movies = {
    getMovies: async (url) => {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${APIKey}&`);
        let prod = await response.json();
 
        console.log(prod);
        return prod; 
 
    }
}