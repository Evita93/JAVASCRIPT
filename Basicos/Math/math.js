//Para operaciones mas específicas

//Onjetos estáticos : Tenemos que usar el nombre para utilizarlo

//Propiedades : Math.E - Math.Pi

//Math.abs(X) -> Devuelve el valor absoluto de x
//Math.ceil(X) -> Devuelve el entero mas grande mayor o igual que un numero
//Math.floor(X) -> Devuelve el entero mas pequeño mayor o igual que un numero
//Math.pow(X,Y) -> Devuelve la potencia de x elevedado a y
//Math.random() -> Genera un numero pseudoaleatorio entre 0 y 1
//Math.round(X) -> Devuelve el valor de un numero redondeado al entero mas cercano
//Math.sign(X) -> Devuelve el signo de la x, que indica si x es positivo, negativo o cero
//Math.sqrt(x) -> Devuelve la raiz cuadrada de x

console.log(Math.E);
console.log(Math.PI);


let num = 5;
console.log(Math.abs(num));

let num1 = 5.3;
console.log(Math.ceil(num1));

let num2 = 5.9
console.log(Math.floor(num2));

console.log(Math.pow(2,3));

console.log(Math.round(Math.random()*100)); //Para redondear y sacar numeros aleatorias del 1 al 100

console.log(Math.sign(-5)); // -1 | 0 | 1

console.log(Math.sqrt(9));