const request = require("request");



const URL = "http://openlibrary.org/search.json?q=i+robot)"


request(`${URL}`, (error, response, body) => {
    if(response.statusCode === 200) {
        console.log("Se encontró el libro");
        const respuesta = JSON.parse(body); 
        
        console.log(respuesta.docs[0].author_name);

    } else {
        console.log("no se encontró el libro");
        
    }


})
        
        
        
        

