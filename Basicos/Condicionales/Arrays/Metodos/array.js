let numbers = [1,2,3,4,5];

//Propiedad
//Array.lenght - devuelve el numero de posiciones que contiene el array

console.log(numbers.length);

//Metodo
//Array.isArray(variable a evaluar) - Devuelve true si la variable es un array

let number = 4;
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));

//Eliminar un elemento
    //.shift() - Elimina el primer elemento del array y devuelve ese elemento
    //.pop() - Elimina el ultimo elemento de un array y devuelve ese elemento

    console.log(numbers);
    numbers.shift();
    console.log(numbers);
    numbers.pop();
    console.log(numbers);

//Añadir elementos 
    //.push(element1, element2...)Añade uno o más elementos al final del array y devuelve la nueva longitud
    //.unshift(element1,element2..)Añade uno o mas elemento al comienzo del array y devuelve la neuva longitud

    numbers.push(6);
    console.log(numbers);
    let newLenght = numbers.unshift(0); //se puede meter e n una nueva variable
    console.log(numbers);

    //Buscar elementos en un array
        //indexOf() - Devuelve el primer indice del elemento que coincida  con el valor especifico o -1 si ninguno es encontrado.
        console.log(numbers.indexOf(2));

        //.lastindexOf() - Devuelve el ultimo indice que coincide
        console.log(numbers.lastIndexOf(4));

       //.reverse() - le da la vuelta al array
       console.log(numbers.reverse()); 

       //.join('separador') - Devuelve un string con el separador que indiquemos por defecto son comas
       let arrayString = numbers.join('/');
       console.log(arrayString);
       console.log(numbers.join('-')); //si no ponemos anda serán comas

       //.splice (a,b,items) - Cambias el contenido de un array elimnando elemtnos existentes y/o agregando nuevos elementos.borrar
       //console.log(numbers.splice(2,2)); //elimina desde la posicion dos , los valores que indiquemos
       console.log (numbers.splice(2,2,10)); // lo mismo pero añade el numero 10 al poner el tercer parametro
       console.log(numbers);
       //.slice(a,b) - Extrae elementos de un array desde el indice a hasta el indice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original
       console.log(numbers.slice(2,4));