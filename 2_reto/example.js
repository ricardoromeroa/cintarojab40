// switch (mes) {
   // case 1:
     //   return "01"
       // break;
    // case 2:
       // return "02"
        //break;
    //default:

      //  break;

//}



// operadores ternarios
let mes = 3;
mes = mes.toString();

let mesRFC = mes.length > 1
    ? mes
    : `0${mes}`;

console.log(mesRFC);