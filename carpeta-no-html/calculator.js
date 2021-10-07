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

function calculadora(valor1, valor2, i) {
  const result = [
    "Suma",
    "Resta",
    "Multiplicacion",
    "Division",
    "Raiz Cuadrad",
  ];

  switch (i) {
    case 0:
      result[i] = valor1 * 1 + valor2 * 1;
      // Suma
      return result[i];

    case 1:
      result[i] = valor1 - valor2;
      // Resta
      return result[i];

    case 2:
      result[i] = valor1 * valor2;
      // Multiplicación
      return result[i];

    case 3:
      result[i] = valor1 / valor2;
      // División
      return result[i].toFixed(2);

    case 4:
      result[i] = "Sin Raiz cuadrada.";
      // Sin raiz cuadrada
      return "Al introducir dos valores numericos correctos la Raiz cuadrada no se ha calculado";

    default:
      break;
  }
}

module.exports = calculadora;

// calculadora(num1, num2);
