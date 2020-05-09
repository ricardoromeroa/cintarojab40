const request = require("request");


const buscarBanda = (nombre) => {

const URL = "http://www.theaudiodb.com/api/v1/json/1/search.php?s";

request(`${URL}=${nombre}`, (error, response, body) => {
    if(response.statusCode === 200) {
        const respuesta = JSON.parse(body);
        
        
        console.log("Se encontró la banda " + respuesta.artists[0].strArtist);
        
        console.log("Genero " + respuesta.artists[0].strGenre);

    } else {
        console.log("no se encontró la banda");
        
    }

})
}

buscarBanda("the killers");