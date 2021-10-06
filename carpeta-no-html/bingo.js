// Declaramos el objeto carton de bingo

const cartonBingo = {
  Lineas: {
    "Linea 1": ["#", "#", "22", "#", "#", "#", "#", "#", "85"],
    "Linea 2": ["8", "#", "#", "#", "43", "#", "#", "#", "#"],
    "Linea 3": ["#", "#", "#", "#", "#", "#", "66", "#", "#"],
  },
  Score: [
    { name: "Pedro", puntos: 18 },

    { name: "Marta", puntos: 30 },

    { name: "Albert", puntos: 25 },

    { name: "Joan", puntos: 12 },
  ],
  Estado: {
    Bingo: false,
    Linea: false,
  },
  Parida: {
    Bombo: [],
    Puntos: 100,
  },
  Jugar_Partida() {
    let continuar;
    do {
      let nombreDelJugador = prompt("¡Hola!, Introduzca su nombre");
      do {
        if (!nombreDelJugador.isNaN()) {
          nombreDelJugador = prompt(
            "Nombre incorrecto, vuelva a introducir. ¡Gracias!"
          );
        } else {
          alert(`Bienvenido al Bingo SkylabCoders, ${nombreDelJugador}.`);

          cartonBingo.Mostrar_Puntos();
        }
      } while (!nombreDelJugador.isNaN());
      // Pedimos el nombre.
      do {
        cartonBingo.Generar_carton();
        let carton = prompt(
          "¿Quiere jugar con el Carton de juego generado?",
          "Yes or No"
        );
        if (carton == null) {
          carton = "yes";
          continuar = false;
        } else {
          continuar = true;
        }
      } while (carton.toLowerCase() === "no");
      // Generamos un Carton.

      if (continuar) {
        alert("¡Empezamos la partida!");
        do {
          cartonBingo.Generar_tirada();
          if (cartonBingo.Estado.Linea === false) {
            cartonBingo.Comprobar_Linea();
          }
          cartonBingo.Comprobar_Bingo();
          if (cartonBingo.Estado.Bingo) {
            alert("¡Enhorabuena, es nuestro nuevo ganador!");
            puntos = 100 - cartonBingo.Parida.Bombo.length;
            cartonBingo.Añadir_Puntos(nombreDelJugador, puntos);
            // alert ('¡Cosulta en consola el Hall of Fame!');
            cartonBingo.Mostrar_Puntos();
            continuar = false;
          } else {
            continuar = confirm("Desea continuar?");
          }
        } while (continuar);
      }

      salir = confirm(
        "Esperamos que haya disfrutado de la partida. ¿Quiere jugar otra vez?"
      );
    } while (salir);
  },

  Mostrar_Puntos() {
    alert(`Consulta en la consola el Hall of Fame.`);
    console.log("/*/*/*/*/*/*/ Hall of Fame /*/*/*/*/*/*/*/*/*/*/");
    console.table(cartonBingo.Score.sort((a, b) => b.puntos - a.puntos));
    console.log("/*/*/*/*/*/*/ Hall of Fame /*/*/*/*/*/*/*/*/*/*/");
  },
  Añadir_Puntos(name, score) {
    cartonBingo.Score.push({ name, puntos: score });
  },

  Generar_carton() {
    cartonBingo.Estado.Bingo = false;
    cartonBingo.Estado.Linea = false;
    cartonBingo.Parida.Bombo = [];
    for (const Line in cartonBingo.Lineas) {
      for (const numero in cartonBingo.Lineas[Line]) {
        cartonBingo.Lineas[Line][numero] = "#";
      }
    }
    // console.table(Carton_Bingo.Lineas)
    vector_numeros = [];
    do {
      numero = Math.floor(Math.random() * 90 + 1);
      if (vector_numeros.includes(numero)) {
        // no hago nada
      } else if (numero < 10) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!cartonBingo.Lineas[Line][numero].isNaN()) {
              Max_Num_Line += 1;
            }
          }
          if (
            cartonBingo.Lineas[Line][0].isNaN() &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][0] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 10 && numero < 20) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!cartonBingo.Lineas[Line][numero].isNaN()) {
              Max_Num_Line += 1;
            }
          }
          if (
            cartonBingo.Lineas[Line][1].isNaN() &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][1] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 20 && numero < 30) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!cartonBingo.Lineas[Line][numero].isNaN()) {
              Max_Num_Line += 1;
            }
          }
          if (
            cartonBingo.Lineas[Line][2].isNaN() &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][2] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 30 && numero < 40) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!cartonBingo.Lineas[Line][numero].isNaN()) {
              Max_Num_Line += 1;
            }
          }
          if (
            cartonBingo.Lineas[Line][3].isNaN() &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][3] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 40 && numero < 50) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!cartonBingo.Lineas[Line][numero].isNaN()) {
              Max_Num_Line += 1;
            }
          }
          if (
            cartonBingo.Lineas[Line][4].isNaN() &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][4] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 50 && numero < 60) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!isNaN(cartonBingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(cartonBingo.Lineas[Line][5]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][5] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 60 && numero < 70) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!isNaN(cartonBingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(cartonBingo.Lineas[Line][6]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][6] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 70 && numero < 80) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!isNaN(cartonBingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(cartonBingo.Lineas[Line][7]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][7] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 80 && numero < 90) {
        rellenar = true;
        for (const Line in cartonBingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in cartonBingo.Lineas[Line]) {
            if (!isNaN(cartonBingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(cartonBingo.Lineas[Line][8]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            cartonBingo.Lineas[Line][8] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      }
    } while (vector_numeros.length < 15);

    console.table(cartonBingo.Lineas);
    console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");
  },
  Generar_tirada() {
    tirada = Math.floor(Math.random() * 90 + 1);
    // valores del 1 al 90.
    console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");
    console.log(`Ha salido el ${tirada}`);
    encontrado = false;
    repetido = false;
    do {
      if (cartonBingo.Parida.Bombo.includes(tirada)) {
        repetido = true;
        tirada = Math.floor(Math.random() * 90 + 1);
      } else {
        cartonBingo.Parida.Bombo.push(tirada);
        repetido = false;
      }

      console.log(
        `Los numero salidos hasta el momento son: ${cartonBingo.Parida.Bombo}`
      );
    } while (repetido);

    for (const Line in cartonBingo.Lineas) {
      for (const numero in cartonBingo.Lineas[Line]) {
        if (cartonBingo.Lineas[Line][numero] == tirada) {
          encontrado = true;
          cartonBingo.Lineas[Line][numero] = "X";
        }
      }
    }
    if (encontrado) {
      console.log(`¡Enhorabuena!, se ha encontrado el valor ${tirada}`);
      console.table(cartonBingo.Lineas);
    } else {
      console.log(`¡Vamos!, atentos al siguiente numero`);
      console.table(cartonBingo.Lineas);
    }
    return tirada;
  },
  Comprobar_Linea() {
    for (const Line in cartonBingo.Lineas) {
      Linea = 0;
      for (const numero in cartonBingo.Lineas[Line]) {
        if (cartonBingo.Lineas[Line][numero] == "X") {
          Linea += 1;
        }
      }
      if (Linea == 5) {
        cartonBingo.Estado.Linea = true;
        alert("!Enhorabuena tiene usted linea!");
      }
    }
  },
  Comprobar_Bingo() {
    Bingo = 0;

    for (const Line in cartonBingo.Lineas) {
      for (const numero in cartonBingo.Lineas[Line]) {
        if (cartonBingo.Lineas[Line][numero] == "X") {
          Bingo += 1;
        }
      }
    }

    if (Bingo == 15) {
      cartonBingo.Estado.Bingo = true;
      alert("!Enhorabuena tiene usted Bingo!");
    }
  },
};

cartonBingo.Jugar_Partida();
