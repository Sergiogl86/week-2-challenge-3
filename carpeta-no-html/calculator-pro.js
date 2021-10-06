/* ● CALCULATOR

Haz una calculadora. Un único programa al que le pasarás uno o dos parámetros mediante "prompt". Los resultados deberían ser mostrados con 3 decimales como mucho (En caso que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.

● Si el usuario introduce UN solo número, deberá mostrar SOLO su raíz cuadrada.

● Si introduce DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.

● Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

// Output>
Results:
The result of the sum is resultSum
The result of the rest is resultRest
... */

// Declarar variables

const resultados = [
  "Suma",
  "Resta",
  "Multiplicacion",
  "Division",
  "Raiz Cuadrad",
];
// Vector de resultados

const num = [];
let num1;

let parada = true;

// Parametros a introducir por usuario.
// Esto pasa a ser una funcion

function inserdata() {
  while (true) {
    num1 = prompt(
      "Introduce un numero a calcular o fin para ver los resultados."
    );
    /*
    https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
    */
    if (!isNaN(num1) && num1 != null && num1 != "") {
      alert("Numero correcto");
      num.push(num1);
      continue;
    } else if (num1 == "fin") {
      num1 = "vacio";
      break;
    } else {
      alert("No es numero");
      continue;
    }
  }

  console.log("Los valores introducidos son:");

  for (i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
}

// num1 = Integer.valueOf(num1);
// num2 = Integer.valueOf(num2);

// console.log(Number.isInteger(num1));
// console.log(Number.isInteger(num2));

// console.log(typeof(num1));

// Definimos el formato para el numero de decimales.

function calculadora() {
  for (let i = 0; i < resultados.length; i++) {
    if (num.length > 1) {
      switch (i) {
        case 0:
          resultados[i] = num[0] * 1;
          for (let j = 1; j < num.length; j++) {
            resultados[i] = resultados[i] * 1 + num[j] * 1;
          }
          // Suma
          console.log(`El valor de la suma es: ${resultados[i]}`);
          break;
        case 1:
          resultados[i] = num[0] * 1;
          for (let j = 1; j < num.length; j++) {
            resultados[i] = resultados[i] * 1 - num[j] * 1;
          }
          // Resta
          console.log(`El valor de la resta es ${resultados[i]}`);
          break;
        case 2:
          resultados[i] = num[0] * 1;
          for (let j = 1; j < num.length; j++) {
            resultados[i] = resultados[i] * num[j];
          }
          // Multiplicación
          console.log(`El valor de la multiplicación es ${resultados[i]}`);
          break;
        case 3:
          resultados[i] = num[0] * 1;
          for (let j = 1; j < num.length; j++) {
            resultados[i] = resultados[i] / num[j];
          }
          // División
          console.log(`El valor de la división es ${resultados[i].toFixed(2)}`);
          break;
        case 4:
          resultados[i] = "Sin Raiz cuadrada.";
          // Sin raiz cuadrada
          console.log(
            `Al introducir dos o más valores numericos correctos la Raiz cuadrada no se ha calculado`
          );
          break;
      }
    } else if (num.length == 1) {
      resultados[4] = Math.sqrt(num[0]);
      // Raiz cuadrada
      console.log(`Solo se ha introducido un valor valido.`);
      console.log(
        `El valor de la raiz cuadrada es ${resultados[4].toFixed(2)}`
      );

      // desbordo la i para que no lo printe n veces.
      i = resultados.length;
    } else {
      console.log(`No se han introducido numeros validos`);
      // desbordo la i para que no lo printe n veces.
      i = resultados.length;
    }
  }
}

do {
  inserdata();
  calculadora();
  parada = confirm("Quiere seguir realizando operaciones?");
} while (parada === true);
