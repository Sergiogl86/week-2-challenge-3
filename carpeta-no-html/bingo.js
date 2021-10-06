// Declaramos el objeto carton de bingo

const Carton_Bingo = {
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
    do {
      Nombre_del_jugador = prompt("¡Hola!, Introduzca su nombre");
      do {
        if (!isNaN(Nombre_del_jugador)) {
          Nombre_del_jugador = prompt(
            "Nombre incorrecto, vuelva a introducir. ¡Gracias!"
          );
        } else {
          alert(`Bienvenido al Bingo SkylabCoders, ${Nombre_del_jugador}.`);

          Carton_Bingo.Mostrar_Puntos();
        }
      } while (!isNaN(Nombre_del_jugador));
      // Pedimos el nombre.
      do {
        Carton_Bingo.Generar_carton();
        carton = prompt(
          "¿Quiere jugar con el Carton de juego generado?",
          "Yes or No"
        );
        if (carton == null) {
          carton = "yes";
          continuar = false;
        } else {
          continuar = true;
        }
      } while (carton.toLowerCase() == "no");
      // Generamos un Carton.

      if (continuar) {
        alert("¡Empezamos la partida!");
        do {
          Carton_Bingo.Generar_tirada();
          if (Carton_Bingo.Estado.Linea == false) {
            Carton_Bingo.Comprobar_Linea();
          }
          Carton_Bingo.Comprobar_Bingo();
          if (Carton_Bingo.Estado.Bingo) {
            alert("¡Enhorabuena, es nuestro nuevo ganador!");
            puntos = 100 - Carton_Bingo.Parida.Bombo.length;
            Carton_Bingo.Añadir_Puntos(Nombre_del_jugador, puntos);
            // alert ('¡Cosulta en consola el Hall of Fame!');
            Carton_Bingo.Mostrar_Puntos();
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
    console.table(Carton_Bingo.Score.sort((a, b) => b.puntos - a.puntos));
    console.log("/*/*/*/*/*/*/ Hall of Fame /*/*/*/*/*/*/*/*/*/*/");
  },
  Añadir_Puntos(name, score) {
    Carton_Bingo.Score.push({ name, puntos: score });
  },

  Generar_carton() {
    Carton_Bingo.Estado.Bingo = false;
    Carton_Bingo.Estado.Linea = false;
    Linea1_5 = 0;
    Linea2_5 = 0;
    Linea2_5 = 0;
    Carton_Bingo.Parida.Bombo = [];
    for (const Line in Carton_Bingo.Lineas) {
      for (const numero in Carton_Bingo.Lineas[Line]) {
        Carton_Bingo.Lineas[Line][numero] = "#";
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
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][0]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][0] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 10 && numero < 20) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][1]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][1] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 20 && numero < 30) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][2]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][2] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 30 && numero < 40) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][3]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][3] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 40 && numero < 50) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][4]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][4] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 50 && numero < 60) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][5]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][5] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 60 && numero < 70) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][6]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][6] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 70 && numero < 80) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][7]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][7] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      } else if (numero >= 80 && numero < 90) {
        rellenar = true;
        for (const Line in Carton_Bingo.Lineas) {
          Max_Num_Line = 0;
          for (const numero in Carton_Bingo.Lineas[Line]) {
            if (!isNaN(Carton_Bingo.Lineas[Line][numero])) {
              Max_Num_Line += 1;
            }
          }
          if (
            isNaN(Carton_Bingo.Lineas[Line][8]) &&
            rellenar &&
            Max_Num_Line < 5
          ) {
            Carton_Bingo.Lineas[Line][8] = numero;
            vector_numeros.push(numero);
            rellenar = false;
          }
        }
      }
    } while (vector_numeros.length < 15);

    console.table(Carton_Bingo.Lineas);
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
      if (Carton_Bingo.Parida.Bombo.includes(tirada)) {
        repetido = true;
        tirada = Math.floor(Math.random() * 90 + 1);
      } else {
        Carton_Bingo.Parida.Bombo.push(tirada);
        repetido = false;
      }

      console.log(
        `Los numero salidos hasta el momento son: ${Carton_Bingo.Parida.Bombo}`
      );
    } while (repetido);

    for (const Line in Carton_Bingo.Lineas) {
      for (const numero in Carton_Bingo.Lineas[Line]) {
        if (Carton_Bingo.Lineas[Line][numero] == tirada) {
          encontrado = true;
          Carton_Bingo.Lineas[Line][numero] = "X";
        }
      }
    }
    if (encontrado) {
      console.log(`¡Enhorabuena!, se ha encontrado el valor ${tirada}`);
      console.table(Carton_Bingo.Lineas);
    } else {
      console.log(`¡Vamos!, atentos al siguiente numero`);
      console.table(Carton_Bingo.Lineas);
    }
    return tirada;
  },
  Comprobar_Linea() {
    for (const Line in Carton_Bingo.Lineas) {
      Linea = 0;
      for (const numero in Carton_Bingo.Lineas[Line]) {
        if (Carton_Bingo.Lineas[Line][numero] == "X") {
          Linea += 1;
        }
      }
      if (Linea == 5) {
        Carton_Bingo.Estado.Linea = true;
        alert("!Enhorabuena tiene usted linea!");
      }
    }
  },
  Comprobar_Bingo() {
    Bingo = 0;

    for (const Line in Carton_Bingo.Lineas) {
      for (const numero in Carton_Bingo.Lineas[Line]) {
        if (Carton_Bingo.Lineas[Line][numero] == "X") {
          Bingo += 1;
        }
      }
    }

    if (Bingo == 15) {
      Carton_Bingo.Estado.Bingo = true;
      alert("!Enhorabuena tiene usted Bingo!");
    }
  },
};

Carton_Bingo.Jugar_Partida();
