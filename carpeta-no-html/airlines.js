/*
Skylab Airlines
Programa una interfaz de usuario para una aerolínea (por consola...). 
Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, 
estos vuelos deben estar declarados de manera global, cuando se llame a la función:

● Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).

● El usuario visualizará todos los vuelos disponibles de una forma amigable : 
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

● A continuación, el usuario verá el coste medio de los vuelos.

● También podrá ver cuántos vuelos efectúan escalas.

● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, 
muestra al usuario sus destinos.
*/

//Declaración de variables

let NombreUser = '';
let CosteMedio = '';
let VuelosEscalas = '';


//Declaramos los vuelos ->

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

//Funcion para pedir el nombre

function InserUser (){

    while(true){
        NombreUser = prompt('Introduce tu nombre, porfavor:');
    /*
    https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
    */
        if(isNaN(NombreUser) && NombreUser != null && NombreUser != ""){
            alert(`Buevos dias ${NombreUser}, estos son los vuelos de hoy:`);
          break;
        }else{
            alert('Disculpa, se ha producido un error, introduce el nombre de nuevo. Gracias!');
          continue;
        }
    }
}

//Fución basica para printar los vuelos con los datos demandados.
function Printflights (){

    CosteMedio = 0 ;
    VuelosEscalas = 0 ;

for (let i=0; i < flights.length; i++){
    if(flights[i].scale == false){
        console.log(`El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`) 
        }else{
            console.log(`El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`)  
            VuelosEscalas = VuelosEscalas + 1 ;
    };
    
    CosteMedio = CosteMedio + flights[i].cost;
    
    };
    console.log(`El coste medio de los vuelos programados es ${(CosteMedio/flights.length).toFixed(2)} €`)
    console.log(`Actualmente hay programados ${VuelosEscalas} con escalas previstas`)
};

//Fución basica para printar los vuelos con los datos demandados, en este caso los últimos 5 del dia.
function Printflightslast5 (){

    CosteMedio = 0 ;
    VuelosEscalas = 0 ;

    console.log(`Las ultimas 5 salidas del dia son:`)

for (let i = flights.length - 5; i < flights.length; i++){
    if(flights[i].scale == false){
        console.log(`Destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`) 
        }else{
            console.log(`Destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`)  
            VuelosEscalas = VuelosEscalas + 1 ;
    };
    
    CosteMedio = CosteMedio + flights[i].cost;
    
    };
    console.log(`El coste medio de los vuelos programados es ${(CosteMedio/flights.length).toFixed(2)} €`)
    console.log(`Actualmente hay programados ${VuelosEscalas} con escalas previstas`)
};

InserUser ();
Printflights ();
Printflightslast5 ();