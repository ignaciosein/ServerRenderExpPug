
document.getElementById("searchFilm").addEventListener("click", function(){

    let nameFilm = document.getElementById("filmName").value
    alert(" funciona")


    fetch(`http://www.omdbapi.com/?t=${nameFilm}&apikey=d33a722d`)
    .then(res=>res.json())
    .then(data=>console.log(data))     


    
     







});


