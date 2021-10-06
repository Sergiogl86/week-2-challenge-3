// TEMA 9: CONECTA 4 w/HTML+CSS+JS

const Conecta4 = {
  Tablero: [
    { p00: "V", p01: "V", p02: "V", p03: "V", p04: "V", p05: "V", p06: "V" },
    { p10: "V", p11: "V", p12: "V", p13: "V", p14: "V", p15: "V", p16: "V" },
    { p20: "V", p21: "V", p22: "V", p23: "V", p24: "V", p25: "V", p26: "V" },
    { p30: "V", p31: "V", p32: "V", p33: "V", p34: "V", p35: "V", p36: "V" },
    { p40: "V", p41: "V", p42: "V", p43: "V", p44: "V", p45: "V", p46: "V" },
    { p50: "V", p51: "V", p52: "V", p53: "V", p54: "V", p55: "V", p56: "V" },
  ],
  Control: {
    Caida: 0,
    Posicion: 0,
    Color: "red",
    Conecta4: false,
    Tiradas: 0,
  },
  Control_CPU: {
    Jugando: false,
    Elegida: 0,
    Evitar: false,
    Gana_Jugador: 0,
    Gana_CPU: 0,
    Primera: 0,
  },
  Tablero_CPU: [
    { p00: "O", p01: "V", p02: "V", p03: "V", p04: "V", p05: "V", p06: "V" },
    { p10: "V", p11: "V", p12: "V", p13: "V", p14: "V", p15: "V", p16: "V" },
    { p20: "V", p21: "V", p22: "V", p23: "V", p24: "V", p25: "V", p26: "V" },
    { p30: "V", p31: "V", p32: "V", p33: "V", p34: "V", p35: "V", p36: "V" },
    { p40: "V", p41: "V", p42: "V", p43: "V", p44: "V", p45: "V", p46: "V" },
    { p50: "V", p51: "V", p52: "V", p53: "V", p54: "V", p55: "V", p56: "V" },
  ],

  Jugar_Conecta4(Contrincante) {
    Conecta4.Control.Conecta4 = false;
    Conecta4.Reiniciar_Conecta4();

    const jugador = document.getElementsByClassName("Tirada");
    for (let i = 0; i < jugador.length; i++) {
      jugador[i].style.visibility = "visible";
      jugador[i].style.backgroundColor = "red";
    }

    document.getElementById("GameInfBox").innerHTML = "Turno del jugador ROJO";

    if (Contrincante == "CPU") {
      Conecta4.Control_CPU.Jugando = true;

      document.getElementById("O1vs1B").innerHTML = "Jugar 1 Vs 1";
      document.getElementById("O1vs1B").style.color = "black";

      document.getElementById("O1vsCPUB").innerHTML = "¡Reiniciar!";
      document.getElementById("O1vsCPUB").style.color = "red";
    } else {
      Conecta4.Control_CPU.Jugando = false;

      document.getElementById("O1vsCPUB").innerHTML = "Jugar 1 Vs CPU";
      document.getElementById("O1vsCPUB").style.color = "black";

      document.getElementById("O1vs1B").innerHTML = "¡Reiniciar!";
      document.getElementById("O1vs1B").style.color = "red";
    }
  },

  Tirar_ficha(pos) {
    // debugger;  // <-- the debugger stops here

    Conecta4.Control.Caida = 0;
    Conecta4.Control.Posicion = pos;
    Conecta4.Control_CPU.Primera = pos;

    let casilla = "";
    casilla = `p${Conecta4.Control.Caida}${Conecta4.Control.Posicion}`;

    if (Conecta4.Tablero[Conecta4.Control.Caida][casilla] == "V") {
      Conecta4.Ocultar_Tirada();
      Conecta4.CaidaFicha();
    } else {
      // debugger;  // <-- the debugger stops here

      document.getElementById("GameInfBox").innerHTML =
        "¡Esta columna esta llena! Prueba otra posición.";
    }
  },
  CaidaFicha() {
    let casilla = "";
    document.getElementById("Timer").innerHTML = "Run";
    casilla = `p${Conecta4.Control.Caida}${Conecta4.Control.Posicion}`;

    if (Conecta4.Control.Caida == 0) {
      casilla = `p${Conecta4.Control.Caida}${Conecta4.Control.Posicion}`;
      document.getElementById(casilla).style.backgroundColor =
        Conecta4.Control.Color;
      Conecta4.Tablero[Conecta4.Control.Caida][casilla] =
        Conecta4.Control.Color;
    } else if (
      Conecta4.Tablero[Conecta4.Control.Caida][casilla] == "V" &&
      Conecta4.Control.Caida < 6
    ) {
      casilla = `p${Conecta4.Control.Caida - 1}${Conecta4.Control.Posicion}`;
      document.getElementById(casilla).style.backgroundColor = "white";
      Conecta4.Tablero[Conecta4.Control.Caida - 1][casilla] = "V";

      casilla = `p${Conecta4.Control.Caida}${Conecta4.Control.Posicion}`;
      document.getElementById(casilla).style.backgroundColor =
        Conecta4.Control.Color;
      Conecta4.Tablero[Conecta4.Control.Caida][casilla] =
        Conecta4.Control.Color;
    }

    if (Conecta4.Control.Caida >= 5) {
      // debugger;  // <-- the debugger stops here
      document.getElementById("Timer").innerHTML = "Next";
      Conecta4.Comprobar_Conecta4(Conecta4.Tablero, 4);
      if (Conecta4.Control.Conecta4 == true) {
        if (Conecta4.Control.Color == "blue") {
          if (Conecta4.Control_CPU.Jugando) {
            document.getElementById("GameInfBox").innerHTML =
              "¡Jugador CPU Azul ha conseguido Conecta 4!";
          } else {
            document.getElementById("GameInfBox").innerHTML =
              "¡Jugador Azul ha conseguido Conecta 4!";
          }
        } else if (Conecta4.Control.Color == "red") {
          document.getElementById("GameInfBox").innerHTML =
            "¡Jugador Rojo ha conseguido Conecta 4!";
        }
      } else {
        Conecta4.Cambiar_Jugador();
      }
    } else {
      Conecta4.Control.Caida += 1;
      setTimeout("Conecta4.CaidaFicha()", 200);
    }
  },
  Cambiar_Jugador() {
    // https://es.stackoverflow.com/questions/19826/c%C3%B3mo-cambiar-el-color-de-un-elemento-por-su-clase-usando-javascript/19830

    if (Conecta4.Control.Tiradas < 41) {
      Conecta4.Mostrar_Tirada();
      Conecta4.Control.Tiradas += 1;

      const jugador = document.getElementsByClassName("Tirada");

      if (Conecta4.Control.Color == "blue") {
        Conecta4.Control.Color = "red";
        for (let i = 0; i < jugador.length; i++) {
          jugador[i].style.backgroundColor = "red";
        }
        document.getElementById("GameInfBox").innerHTML =
          "Turno del jugador ROJO";
      } else if (Conecta4.Control.Color == "red") {
        Conecta4.Control.Color = "blue";
        for (let i = 0; i < jugador.length; i++) {
          jugador[i].style.backgroundColor = "blue";
        }
        if (Conecta4.Control_CPU.Jugando) {
          document.getElementById("GameInfBox").innerHTML =
            "Turno del CPU AZUL";
          Conecta4.CPU_Logica();
        } else {
          document.getElementById("GameInfBox").innerHTML =
            "Turno del jugador AZUL";
        }
      }
    } else {
      document.getElementById("GameInfBox").innerHTML = "¡Tablero lleno!";
    }
  },
  Mostrar_Tirada() {
    const jugador = document.getElementsByClassName("Tirada");
    for (let i = 0; i < jugador.length; i++) {
      jugador[i].style.visibility = "visible";
    }
  },
  Ocultar_Tirada() {
    const jugador = document.getElementsByClassName("Tirada");
    for (let i = 0; i < jugador.length; i++) {
      jugador[i].style.visibility = "hidden";
    }
  },
  Comprobar_Conecta4(Tablero, Peso) {
    Conecta4.Comprobar_horizontal(Tablero, Peso);
    // debugger;  // <-- the debugger stops here
    Conecta4.Comprobar_verticales(Tablero, Peso);
    // debugger;  // <-- the debugger stops here
    Conecta4.Comprobar_Diagonal_A(Tablero, Peso);
    // debugger;  // <-- the debugger stops here
    Conecta4.Comprobar_Diagonal_B(Tablero, Peso);
    // debugger;  // <-- the debugger stops here
  },
  Comprobar_horizontal(Tablero, Peso) {
    // debugger;  // <-- the debugger stops here

    let NumLinea = 0;
    let Encontrado = false;
    let SolOK = true;
    let posC = "";

    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 4; y++) {
        if (Encontrado == false && NumLinea != Peso) {
          NumLinea = 0;
          SolOK = true;
          // posO = 'p' + x + y;
          for (let z = 0; z < 4; z++) {
            posC = `p${x}${y + z}`;
            if (Tablero[x][posC] == Conecta4.Control.Color) {
              NumLinea += 1;
            } else if (
              Tablero[x][posC] != "V" &&
              Tablero[x][posC] != Conecta4.Control.Color
            ) {
              SolOK = false;
            }
          }
        }
        if (NumLinea == Peso && SolOK) {
          Encontrado = true;
        }
      }
    }
    if (Encontrado) {
      Conecta4.Control.Conecta4 = Encontrado;
    }
  },
  Comprobar_verticales(Tablero, Peso) {
    // debugger;  // <-- the debugger stops here

    let NumLinea = 0;
    let Encontrado = false;
    let SolOK = true;
    let posC = "";

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 7; y++) {
        if (Encontrado == false && NumLinea != Peso) {
          NumLinea = 0;
          SolOK = true;
          for (let z = 0; z < 4; z++) {
            posC = `p${x + z}${y}`;
            if (Tablero[x + z][posC] == Conecta4.Control.Color) {
              NumLinea += 1;
            } else if (
              Tablero[x + z][posC] != "V" &&
              Tablero[x + z][posC] != Conecta4.Control.Color
            ) {
              SolOK = false;
            }
          }
        }
        if (NumLinea == Peso && SolOK) {
          Encontrado = true;
        }
      }
    }
    if (Encontrado) {
      Conecta4.Control.Conecta4 = Encontrado;
    }
  },
  Comprobar_Diagonal_A(Tablero, Peso) {
    // debugger;  // <-- the debugger stops here

    let NumLinea = 0;
    let Encontrado = false;
    let SolOK = true;
    let posC = "";

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 4; y++) {
        if (Encontrado == false && NumLinea != Peso) {
          NumLinea = 0;
          SolOK = true;

          for (let z = 0; z < 4; z++) {
            posC = `p${x + z}${y + z}`;
            if (Tablero[x + z][posC] == Conecta4.Control.Color) {
              NumLinea += 1;
            } else if (
              Tablero[x + z][posC] != "V" &&
              Tablero[x + z][posC] != Conecta4.Control.Color
            ) {
              SolOK = false;
            }
          }
        }
        if ((NumLinea == Peso) & SolOK) {
          Encontrado = true;
        }
      }
    }
    if (Encontrado) {
      Conecta4.Control.Conecta4 = Encontrado;
    }
  },
  Comprobar_Diagonal_B(Tablero, Peso) {
    // debugger;  // <-- the debugger stops here

    let NumLinea = 0;
    let Encontrado = false;
    let SolOK = true;
    let posC = "";

    for (let x = 3; x < 6; x++) {
      for (let y = 0; y < 4; y++) {
        if (Encontrado == false && NumLinea != Peso) {
          NumLinea = 0;
          SolOK = true;
          for (let z = 0; z < 4; z++) {
            posC = `p${x - z}${y + z}`;
            if (Tablero[x - z][posC] == Conecta4.Control.Color) {
              NumLinea += 1;
            } else if (
              Tablero[x - z][posC] != "V" &&
              Tablero[x - z][posC] != Conecta4.Control.Color
            ) {
              SolOK = false;
            }
          }
        }
        if (NumLinea == Peso && SolOK) {
          Encontrado = true;
        }
      }
    }
    if (Encontrado) {
      Conecta4.Control.Conecta4 = Encontrado;
    }
  },
  Reiniciar_Conecta4() {
    // debugger;  // <-- the debugger stops here

    let posO = "";
    Conecta4.Control.Color = "red";
    Conecta4.Control.Tiradas = 0;
    document.getElementById("Timer").innerHTML = "Hi!";

    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 7; y++) {
        posO = `p${x}${y}`;
        Conecta4.Tablero[x][posO] = "V";
        document.getElementById(posO).style.backgroundColor = "white";
      }
    }
  },

  CPU_Logica() {
    // debugger;  // <-- the debugger stops here

    Conecta4.Control_CPU.Gana_Jugador = 0;
    Conecta4.Control_CPU.Gana_CPU = 0;
    Conecta4.Control_CPU.Evitar = false;

    const casilla = "";

    debugger; // <-- the debugger stops here

    if (
      Conecta4.CPU_Comprueba_Jugador("blue", 4) &&
      Conecta4.Control_CPU.Gana_CPU == 4
    ) {
      debugger; // <-- the debugger stops here
      Conecta4.Tirar_ficha(Conecta4.Control_CPU.Elegida);
      Conecta4.Control_CPU.Gana_CPU = false;
    } else if (
      Conecta4.CPU_Comprueba_Jugador("red", 4) &&
      Conecta4.Control_CPU.Gana_Jugador == 4
    ) {
      debugger; // <-- the debugger stops here
      Conecta4.Tirar_ficha(Conecta4.Control_CPU.Elegida);
      Conecta4.Control_CPU.Gana_Jugador = false;
    } else if (
      Conecta4.CPU_Comprueba_Jugador("red", 3) &&
      Conecta4.Control_CPU.Gana_Jugador == 3 &&
      Conecta4.Control_CPU.Evitar != Conecta4.Control_CPU.Elegida
    ) {
      debugger; // <-- the debugger stops here
      Conecta4.Tirar_ficha(Conecta4.Control_CPU.Elegida);
      Conecta4.Control_CPU.Gana_Jugador = false;
    } else if (
      Conecta4.CPU_Comprueba_Jugador("blue", 3) &&
      Conecta4.Control_CPU.Gana_CPU == 3 &&
      Conecta4.Control_CPU.Evitar != Conecta4.Control_CPU.Elegida
    ) {
      debugger; // <-- the debugger stops here
      Conecta4.Tirar_ficha(Conecta4.Control_CPU.Elegida);
      Conecta4.Control_CPU.Gana_CPU = false;
    } else {
      debugger; // <-- the debugger stops here

      if (Conecta4.Control.Tiradas > 2) {
        Conecta4.Control_CPU.Elegida = Conecta4.CPU_Tira_Random();
      } else {
        Conecta4.Control_CPU.Elegida = Conecta4.CPU_Tira_Centro();
      }

      Conecta4.Tirar_ficha(Conecta4.Control_CPU.Elegida);
    }
  },
  CPU_Copia_Tablero() {
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 7; y++) {
        posO = `p${x}${y}`;
        Conecta4.Tablero_CPU[x][posO] = Conecta4.Tablero[x][posO];
      }
    }
  },
  CPU_Tirada(Colum) {
    // debugger;  // <-- the debugger stops here

    let casilla = "";
    let pos = false;

    for (let x = 0; x < 6; x++) {
      casilla = `p${x}${Colum}`;

      if (x == 0 && Conecta4.Tablero_CPU[x][casilla] == "V") {
        Conecta4.Tablero_CPU[x][casilla] = Conecta4.Control.Color;
        pos = x;
      } else if (Conecta4.Tablero_CPU[x][casilla] == "V" && x < 6) {
        casilla = `p${x - 1}${Colum}`;
        Conecta4.Tablero_CPU[x - 1][casilla] = "V";

        casilla = `p${x}${Colum}`;
        Conecta4.Tablero_CPU[x][casilla] = Conecta4.Control.Color;
        pos = x;
      }
    }
    // debugger;  // <-- the debugger stops here
    return pos;
  },
  CPU_Comprueba_Jugador(color, ps) {
    debugger; // <-- the debugger stops here

    const vector_pruebas = [];
    let casilla = "";
    let tirada = 0;
    Conecta4.Control_CPU.Elegida = false;
    Conecta4.CPU_Copia_Tablero();

    // debugger;  // <-- the debugger stops here

    for (let y = 0; y < 7; y++) {
      if (color == "red") {
        Conecta4.Control.Color = "red";
      } else if (color == "blue") {
        Conecta4.Control.Color = "blue";
      }

      // Realiza cada tirada de las 7 posibles.

      tirada = Conecta4.CPU_Tirada(y);
      // Lleva la tirada a la posición final de un sub tablero.

      if (tirada != false) {
        Conecta4.Comprobar_Conecta4(Conecta4.Tablero_CPU, ps);
        // Comprueba si se ha producido 4 en raya.

        if (Conecta4.Control.Conecta4) {
          Conecta4.Control_CPU.Elegida = y;
          Conecta4.Control.Conecta4 = false;

          casilla = `p${tirada}${y}`;
          Conecta4.Tablero_CPU[tirada][casilla] = "V";

          Conecta4.Control.Color = "blue";

          if (color == "red") {
            Conecta4.Control_CPU.Gana_Jugador = ps;
          } else if (color == "blue") {
            Conecta4.Control_CPU.Gana_CPU = ps;
          }
          return true;
        }
        if (color == "blue" && Conecta4.Control.Conecta4 == false && ps == 4) {
          debugger; // <-- the debugger stops here
          casilla = `p${tirada}${y}`;
          vector_pruebas.push(tirada);
          vector_pruebas.push(casilla);

          Conecta4.Control.Color = "red";

          Conecta4.Control.Conecta4 = false;

          // Se lanza otro for para la posible tirada futura.

          for (let f = 0; f < 7; f++) {
            tirada = Conecta4.CPU_Tirada(f);
            // Lleva la tirada a la posición final de un sub tablero.

            if (tirada != false) {
              Conecta4.Comprobar_Conecta4(Conecta4.Tablero_CPU, 4);
              // Comprueba si se ha producido 4 en raya.

              if (Conecta4.Control.Conecta4) {
                Conecta4.Control_CPU.Evitar = f;
                Conecta4.Control.Conecta4 = false;

                casilla = `p${tirada}${f}`;
                Conecta4.Tablero_CPU[tirada][casilla] = "V";
                Conecta4.Tablero_CPU[vector_pruebas[0]][vector_pruebas[1]] =
                  "V";

                Conecta4.Control.Color = "blue";

                return false;
              }
              casilla = `p${tirada}${f}`;
              Conecta4.Tablero_CPU[tirada][casilla] = "V";
            }
          }
          Conecta4.Tablero_CPU[vector_pruebas[0]][vector_pruebas[1]] = "V";
          Conecta4.Control.Color = "blue";
          vector_pruebas.pop();
          vector_pruebas.pop();
        } else {
          casilla = `p${tirada}${y}`;
          Conecta4.Tablero_CPU[tirada][casilla] = "V";
        }
      }
    }

    Conecta4.Control.Color = "blue";
  },
  CPU_Tira_Random() {
    // debugger;  // <-- the debugger stops here
    let Elegida = 0;
    const Caida = 0;

    do {
      do {
        Elegida = Math.floor(Math.random() * 7);
        casilla = `p${Caida}${Elegida}`;
      } while (Conecta4.Tablero[Caida][casilla] != "V");
    } while (Conecta4.Control_CPU.Evitar == Elegida);
    debugger; // <-- the debugger stops here

    return Elegida;
  },
  CPU_Tira_Centro() {
    // debugger;  // <-- the debugger stops here
    let Elegida = 0;
    const Caida = 0;
    do {
      do {
        Elegida = Math.floor(Math.random() * 3) + 2;
        casilla = `p${Caida}${Elegida}`;
      } while (Conecta4.Control_CPU.Primera == Elegida);
    } while (Conecta4.Tablero[Caida][casilla] != "V");

    return Elegida;
  },
};
