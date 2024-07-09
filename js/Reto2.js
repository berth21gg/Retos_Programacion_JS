//* #2 ¿ES UN ANAGRAMA?
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

export function anagrama(palabra1, palabra2){
    if(typeof palabra1 != 'string' || typeof palabra2 != 'string')
        return console.warn('Las palabras proporcionadas no son cadenas de texto');

    let palabra1LowerCase = palabra1.toLowerCase();
    let palabra2LowerCase = palabra2.toLowerCase();

    if(palabra1LowerCase.length != palabra2LowerCase.length)
        return console.info(false);
    if(palabra1LowerCase === palabra2LowerCase)
        return console.info(false);

    let esAnagrama = true;

    palabra1LowerCase.split('').forEach(element => {
        //console.log(element, index);
        let regex = new RegExp(element, "g");
        //console.info(palabra2LowerCase.match(regex));
        if(palabra2LowerCase.match(regex) === null) 
            return esAnagrama = false;
        if(palabra2LowerCase.match(regex).length != palabra1LowerCase.match(regex).length)
            return esAnagrama = false;
    });
    esAnagrama != false ? console.info(true) : console.info(false);
}