const request = require("request");



const URL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-05-01&end_date=2020-05-05&api_key=DEMO_KEY";


request(`${URL}`, (error, response, body) => {
    if(response.statusCode === 200) {
        const respuesta = JSON.parse(body);
        
        console.log("Se encontraron asteroides cercanos ");
        
        console.log("Los asteroides " + respuesta.near_earth_objects[200-05-03][0].name);

    } else {
        console.log("no se encontraron asteroides");
        
    }

})