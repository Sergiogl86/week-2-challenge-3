/*● CALCULATOR

Haz una calculadora. Un único programa al que le pasarás uno o dos parámetros mediante "prompt". Los resultados deberían ser mostrados con 3 decimales como mucho (En caso que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.

● Si el usuario introduce UN solo número, deberá mostrar SOLO su raíz cuadrada.

● Si introduce DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.

● Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

// Output>
Results:
The result of the sum is resultSum
The result of the rest is resultRest
...*/

//Declarar variables

let resultados = ['Suma', 'Resta', 'Multiplicacion', 'Division', 'Raiz Cuadrad']
//Vector de resultados

let num1;
let num2;

//Parametros a introducir por usuario.

while(true){
    num1 = prompt('Introduce el primer valor de la operación o fin para salir');
/*
https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
*/
    if(!isNaN(num1) && num1 != null && num1 != ""){
        alert('Numero correcto');
      break;
    }else if(num1 == 'fin'){
        num1 = 'vacio'
        break;
    }else{
        alert('No es numero');
      continue;
    }
}

while(true){
    num2 = prompt('Introduce el segundo valor de la operación o fin para salir');
/*
https://es.stackoverflow.com/questions/248372/como-validar-solo-numeros-en-un-prompt-en-javascript
*/
    if(!isNaN(num2) && num2 != null && num2 != ""){
        alert('Numero correcto');
      break;
    }else if(num2 == 'fin'){
        num2 = 'vacio'
        break;
    }else{
        alert('No es numero');
      continue;
    }
}


console.log(`Los valores introducidos son ${num1} y ${num2}`);

function calculadora (valor1, valor2){

   
        for (let i=0 ; i < resultados.length ; i++){
            if (!isNaN(valor1) && !isNaN(valor2)){
            switch (i) {
                case 0:
                    resultados [i] = valor1*1 + valor2*1;
                    //Suma
                    console.log(`El valor de la suma de ${valor1} más ${valor2} es ${resultados [i]}`);
                  break;
                case 1:
                    resultados [i] = valor1 - valor2;
                    //Resta
                    console.log(`El valor de la resta de ${valor1} menos ${valor2} es ${resultados [i]}`);
                  break;
                case 2:
                    resultados [i] = valor1 * valor2;
                    //Multiplicación
                    console.log(`El valor de la multiplicación de ${valor1} por ${valor2} es ${resultados [i]}`);
                  break;
                  case 3:
                    resultados [i] = valor1 / valor2;
                    //División
                    console.log(`El valor de la división de ${valor1} entre ${valor2} es ${resultados [i].toFixed(2)}`);
                  break;
                  case 4:
                    resultados [i] = 'Sin Raiz cuadrada.';
                    //Sin raiz cuadrada
                    console.log(`Al introducir dos valores numericos correctos la Raiz cuadrada no se ha calculado`);
                  break;
              };
            }else if (!isNaN(valor1)) {
                resultados [4] = Math.sqrt(valor1);
                //Raiz cuadrada
                console.log(`Solo se ha introducido un valor valido.`);
                console.log(`El valor de la raiz cuadrada es ${resultados [4].toFixed(2)}`);

                //desbordo la i para que no lo printe n veces.
                i = resultados.length;
            }else if (!isNaN(valor2)) {
              resultados [4] = Math.sqrt(valor2);
              //Raiz cuadrada
              console.log(`Solo se ha introducido un valor valido.`);
              console.log(`El valor de la raiz cuadrada es ${resultados [4].toFixed(2)}`);

              //desbordo la i para que no lo printe n veces.
              i = resultados.length;
          }else{
                console.log(`No se han introducido numeros validos`);
                //desbordo la i para que no lo printe n veces.
                i = resultados.length;
            }
        }

 }

 calculadora (num1, num2);

