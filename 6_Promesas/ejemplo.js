// Promesas (3)
// Promesas => Pending (Esperar al dia del cumple de Alba)
// Promesa => resolve (tel)
// Promesa => rejected (razón)


// Determinar si un numero es mayor a 5
/* const promesa = new Promise((resolve, reject) => {
    const numero = 3;
    if(numero > 5) {
        resolve (`${numero} es mayor a 5`);

    } else {
        reject(new Error(`Error: ${numero} no es mayor a 5`));
    }
}); */


const promesa = new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10);

    setTimeout(() => {
        // ? :
        numero > 5
            ? resolve(`${numero} es mayor a 5`)
            :reject(new Error(`Error: ${numero} no es mayor a 5`));
    }, 5000)
});

promesa
.then((data) => console.log(data))
.catch((err) => console.log(err));


 // console.log(promesa);
