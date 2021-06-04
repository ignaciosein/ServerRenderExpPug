const fetch = require('node-fetch');
 
const APIKEY = process.env.API_KEY;

const movies = {
    getMovies: async (url) => {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&`);
        let prod = await response.json();
 
        console.log(prod);
        return prod; 
 
    }
}