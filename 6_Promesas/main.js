const request = require("request");
const {Banda} = require("./Banda");

const obtenerBanda = (nombre) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`;

    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            const respuesta = JSON.parse(body);

            if(respuesta.artists !=null) {
                // Promesa cumple
                const { strArtist, intFormedYear, strGenre, strWebsite} = respuesta.artists[0];
                const banda = new Banda(strArtist, intFormedYear, strGenre, strWebsite);
                resolve(banda);
            } else {
                // La promesa no se cumple
                reject(new Error(`No encontre a ${nombre} ${error}`))
            }
        })
    });
}

obtenerBanda("korn")
.then((data) => console.log(data))
.catch((err) => console.log(err));
