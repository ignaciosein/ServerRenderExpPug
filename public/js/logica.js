 
document.getElementById("searchFilm").addEventListener("submit", function(event){

    event.preventDefault()

    let nameFilm = document.getElementById("filmName").value
    alert(nameFilm)


    fetch(`http://www.omdbapi.com/?t=${nameFilm}&apikey=d33a722d`)
    .then(res=>res.json())
    .then(data=>console.log(data))     


    
     







});


