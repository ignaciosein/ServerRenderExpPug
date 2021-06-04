const APIKEY = process.env.API_KEY
document.getElementById("searchFilm").addEventListener("submit", function(event){

    event.preventDefault()

    let nameFilm = document.getElementById("filmName").value
    alert(nameFilm)

    fetch(`http://www.omdbapi.com/?t=${nameFilm}&apikey=${APIKEY}`)
    .then(res=>res.json())
    .then(data=>console.log(data))     
});