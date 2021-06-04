const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;
const movies = {
    getMovies: async (url) => {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&`);
        let prod = await response.json();
 
        console.log(prod);
        return prod; 
 
    }
}