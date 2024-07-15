//* #3 LA SUCESIÓN DE FIBONACCI
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

export function FIBONACCI() {
    let value1 = 0;
    let value2 = 1;
    let pivote = 0;

    if(value1 === 0 && value2 === 1){
        console.log(value1);
        console.log(value2);
    }

    for (let i = 2; i <= 50; i++){
        console.log(value1 + value2);
        pivote = value1;
        value1 = value2;
        value2 = pivote + value2;
    }
}

