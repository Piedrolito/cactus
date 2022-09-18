function createGame(){
    var pseudo = document.getElementById("pseudo").value;
    var post = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({pseudo: pseudo})
    }
    fetch("api/connection/cree", post)
    .then((res) => console.log(res))
    .catch(error => alert("Erreur : " + error));
}