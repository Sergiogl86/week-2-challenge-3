let pantalla = "";
let pantallaux = "";
let operador = "";
let result = "";
let coma = true;
// let numcoma = 0;

function Clear() {
  pantalla = "";
  pantallaux = "";
  operador = "";
  result = "";
  coma = true;
  // numcoma = 0;
  document.getElementById("Pan2").innerHTML = pantallaux;
  document.getElementById("ope").innerHTML = operador;
  document.getElementById("Pan").innerHTML = pantalla;
  document.getElementById("Res").innerHTML = result;
}

function DelNum() {
  long = pantalla.length - 1;
  pantalla = pantalla.substr(0, long);
  document.getElementById("Pan").innerHTML = pantalla;
}

function AddNum(num) {
  /* if(coma){
        numcoma= numcoma + 1;
        div = Math.pow(10, numcoma);       
        pantalla = pantalla + (num/div) ;
        document.getElementById("Pan").innerHTML = pantalla; 

    }else{
        pantalla = pantalla*10 + num ;
        document.getElementById("Pan").innerHTML = pantalla;   
    } */

  if (coma && num === ".") {
    coma = false;
    pantalla += num;
    document.getElementById("Pan").innerHTML = pantalla;
  } else if (num !== ".") {
    pantalla += num;
    document.getElementById("Pan").innerHTML = pantalla;
  }
}

function operaciones(oper) {
  switch (oper) {
    case "÷":
      operador = "÷";
      pantallaux = pantalla;
      pantalla = "";
      coma = true;
      document.getElementById("Pan2").innerHTML = pantallaux;
      document.getElementById("ope").innerHTML = operador;
      document.getElementById("Pan").innerHTML = pantalla;
      break;
    case "x":
      operador = "x";
      pantallaux = pantalla;
      pantalla = "";
      coma = true;
      document.getElementById("Pan2").innerHTML = pantallaux;
      document.getElementById("ope").innerHTML = operador;
      document.getElementById("Pan").innerHTML = pantalla;
      break;
    case "-":
      operador = "-";
      pantallaux = pantalla;
      pantalla = "";
      coma = true;
      document.getElementById("Pan2").innerHTML = pantallaux;
      document.getElementById("ope").innerHTML = operador;
      document.getElementById("Pan").innerHTML = pantalla;
      break;
    case "+":
      operador = "+";
      pantallaux = pantalla;
      pantalla = "";
      coma = true;
      document.getElementById("Pan2").innerHTML = pantallaux;
      document.getElementById("ope").innerHTML = operador;
      document.getElementById("Pan").innerHTML = pantalla;
      break;
    default:
      break;
  }
}

function resultado() {
  switch (operador) {
    case "÷":
      result = pantallaux / pantalla;
      document.getElementById("Res").innerHTML = result;
      break;
    case "x":
      result = pantallaux * pantalla;
      document.getElementById("Res").innerHTML = result;
      break;
    case "-":
      result = pantallaux - pantalla;
      document.getElementById("Res").innerHTML = result;
      break;
    case "+":
      result = pantallaux * 1 + pantalla * 1;
      document.getElementById("Res").innerHTML = result;
      break;
    default:
      break;
  }
}
