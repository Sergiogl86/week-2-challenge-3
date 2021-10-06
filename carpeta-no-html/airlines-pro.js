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

let NombreUser = "";
let CosteMedio = "";
let VuelosEscalas = "";
const contraseña = "Patata";
let contraseña_user = "";
let permisos_user = "User";
let terminar = false;

//Declaramos los vuelos ->

let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//Funcion para pedir el nombre

function InserUser() {
  while (true) {
    NombreUser = prompt("Introduce tu nombre, por favor:");
    /*
    https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
    */
    if (isNaN(NombreUser) && NombreUser != null && NombreUser != "") {
      alert(`Buenos dias ${NombreUser}, estos son los vuelos de hoy:`);
      break;
    } else {
      alert(
        "Disculpa, se ha producido un error, introduce el nombre de nuevo. ¡Gracias!"
      );
      continue;
    }
  }
}

//Fución basica para printar los vuelos con los datos demandados.
function Printflights() {
  CosteMedio = 0;
  VuelosEscalas = 0;

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale == false) {
      console.log(
        `-- Id ${flights[i].id} -- El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `-- Id ${flights[i].id} -- El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`
      );
      VuelosEscalas = VuelosEscalas + 1;
    }

    CosteMedio = CosteMedio + flights[i].cost;
  }
  console.log(
    `/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/`
  );
  console.log(
    `El coste medio de los vuelos programados es ${(
      CosteMedio / flights.length
    ).toFixed(2)} €`
  );
  console.log(
    `Actualmente hay programados ${VuelosEscalas} con escalas previstas`
  );
  console.log(
    `/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/`
  );
}

//Fución basica para printar los vuelos con los datos demandados, en este caso los últimos 5 del dia.
function Printflightslast5() {
  CosteMedio = 0;
  VuelosEscalas = 0;

  console.log(`Las ultimas 5 salidas del dia son:`);

  for (let i = flights.length - 5; i < flights.length; i++) {
    if (flights[i].scale == false) {
      console.log(
        `Destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `Destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`
      );
      VuelosEscalas = VuelosEscalas + 1;
    }

    CosteMedio = CosteMedio + flights[i].cost;
  }
  console.log(
    `/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/`
  );
  console.log(
    `El coste medio de los vuelos programados es ${(
      CosteMedio / flights.length
    ).toFixed(2)} €`
  );
  console.log(
    `Actualmente hay programados ${VuelosEscalas} con escalas previstas`
  );
  console.log(
    `/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/`
  );
}

//Vamos a comprobar si el usuario tiene permisos de administrador.
function IsAdmin() {
  permisos_user = "User";
  let intentos = 0;
  Admin = confirm("Es usted administrador del sistema?");

  while (Admin) {
    contraseña_user = prompt("Introduzca la contraseña:");
    /*
    https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
    */
    if (
      isNaN(NombreUser) &&
      NombreUser != null &&
      NombreUser != "" &&
      contraseña === contraseña_user
    ) {
      alert(`Se han concedido permisos de administrador.`);
      permisos_user = "Admin";
      break;
    } else if (
      isNaN(NombreUser) &&
      NombreUser != null &&
      NombreUser != "" &&
      contraseña !== contraseña_user &&
      intentos < 5
    ) {
      alert("La contraseña es incorrecta, vuelva a introducir. ¡Gracias!");
      intentos = intentos + 1;
      continue;
    } else {
      alert(
        "Has superado el numero maximo de intentos, se mantienen los permisos de usuario."
      );
      permisos_user = "User";
      break;
    }
  }
}

//Vamos a definir las funciones del administrador.
function UserAdmin() {
  let UserAdBu = true;
  do {
    opcion = prompt(
      `Como Administrador del sistema puede Añadir o Eliminar vuelos. Escriba Añadir, Eliminar o Salir.`
    );
    opcion = opcion.split(" ").join("");
    do {
      if (
        opcion.toLowerCase() !== "añadir" &&
        opcion.toLowerCase() !== "eliminar" &&
        opcion.toLowerCase() !== "salir"
      ) {
        opcion = prompt(`Porfavor, escriba Añadir, Eliminar o Salir.`);
      }

      console.log(opcion);
    } while (
      opcion.toLowerCase() !== "añadir" &&
      opcion.toLowerCase() !== "eliminar" &&
      opcion.toLowerCase() !== "salir"
    );

    switch (opcion.toLowerCase()) {
      case "añadir":
        Añadir();
        alert("Se ha añadido el vuelo, gracias");
        break;
      case "eliminar":
        Eliminar();
        alert("Se ha eliminado el vuelo, gracias.");
        break;
      case "salir":
        alert("Gracias, hasta la proxima");
        break;
    }
    if (opcion.toLowerCase() !== "salir") {
      UserAdBu = confirm(
        "Quiere seguir realizando operaciones como administrador"
      );
    } else {
      UserAdBu = false;
    }

    //console.log(permisos_user);
  } while (UserAdBu);
}

function Añadir() {
  if (flights.length < 15) {
    alert(
      "Para añadir un nuevo vuelo necesitamos los siguientes parametros: origen, destino, coste y escala"
    );
    ori = prompt(`Introduce el origen del vuelo.`);
    des = prompt(`Introduce el destino del vuelo.`);
    cos = prompt(`Introduce el coste del vuelo.`);
    esc = prompt(`Introduce si el vuelo tiene escalar. true or false`);
    flights.push({
      id: flights.length,
      to: ori,
      from: des,
      cost: cos * 1,
      scale: esc,
    });
    Printflights();
  } else {
    alert("No se pueden almacenar mas de 15 vuelos en este terminal.");
  }
}

function Eliminar() {
  alert(`Consulta la consola para conocer el Id del vuelo a eliminar?`);
  Printflights();
  eli = prompt(`Introduce el Id del vuelo a eliminar.`);
  flights.splice(eli, 1);
  Printflights();
}

function Buscar_Vuelo() {
  do {
    console.log(
      `/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/`
    );
    prec1 = prompt(
      `Introduce como queres ordenar los vuelos 'Mayor' a menor coste, 'Menor' a mayor coste o 'Igual' a una cantidad de €`
    );
    prec1 = prec1.split(" ").join("");

    switch (prec1.toLowerCase()) {
      case "mayor":
        //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
        mayor_aux1 = flights;
        mayor_aux1.sort(function (a, b) {
          return b.cost - a.cost;
        });
        for (let i = 0; i < mayor_aux1.length; i++) {
          console.log(
            `-- Id ${mayor_aux1[i].id} -- El vuelo con origen: ${mayor_aux1[i].to}, y destino: ${mayor_aux1[i].from} tiene un coste de ${mayor_aux1[i].cost} € y realiza, al menos, una escala.`
          );
        }
        alert("Consulta los resultados en la consola.");
        break;
      case "menor":
        //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
        mayor_aux1 = flights;
        mayor_aux1.sort(function (a, b) {
          return a.cost - b.cost;
        });
        for (let i = 0; i < mayor_aux1.length; i++) {
          console.log(
            `-- Id ${mayor_aux1[i].id} -- El vuelo con origen: ${mayor_aux1[i].to}, y destino: ${mayor_aux1[i].from} tiene un coste de ${mayor_aux1[i].cost} € y realiza, al menos, una escala.`
          );
        }
        alert("Consulta los resultados en la consola.");
        break;
      case "igual":
        prec2 = prompt(
          `Introduce la cantidad en '€' para buscar coincidencias.`
        );
        for (let i = 0; i < flights.length; i++) {
          if (flights[i].cost == prec2) {
            console.log(
              `-- Id ${flights[i].id} -- El vuelo con origen: ${flights[i].to}, y destino: ${flights[i].from} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`
            );
          }
        }
        alert("Consulta los resultados en la consola.");
        break;
    }

    Buscar_Vuelo_pago = confirm("Quieres reservar algun vuelo?");
    if (Buscar_Vuelo_pago) {
      Buscar_Vuelo_res = prompt("Indica el ID, porfavor.");
      if (Buscar_Vuelo_res < flights.length) {
        alert("Gracias por su compra, vuelva pronto.");
      } else {
        alert(
          "El Id no pertenece a un vuelo registrado. Repita el proceso de reserva."
        );
      }
    }

    Buscar_Vuelo_con = confirm("Quieres realizar otra busqueda?");
  } while (Buscar_Vuelo_con);
}

//Cuerpo del programa

do {
  InserUser();
  Printflights();
  Printflightslast5();

  IsAdmin();

  switch (permisos_user) {
    case "Admin":
      UserAdmin();
      break;
    case "User":
      Buscar_Vuelo();
      break;
  }

  terminar = confirm("Desea seguir ejecutando la consola de vuelos?");
} while (terminar);

/*
Todas las funciones creadas
InserUser ();
Printflights ();
Printflightslast5 ();
IsAdmin ();
UserAdmin ();
Buscar_Vuelo ();
*/
