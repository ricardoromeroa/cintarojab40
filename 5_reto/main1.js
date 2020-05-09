const request = require("request");

const peticionAutor = (nombre) => {
const URL = "http://openlibrary.org/search.json?author=";


request(`${URL}`, (error, response, body) => {
    if(response.statusCode === 200) {
        console.log("Se encontró la lista");
        const respuesta = JSON.parse(body);
        const coleccion = respuesta.docs.map(element => element.title); 
        const nAutor = new nAutor(
            respuesta.docs[0].author.name,
            coleccion);

        console.log(nAutor);

    } else {
        console.log("no se encontró la lista");
        
    }

})
}