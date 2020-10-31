let num = -5;
// && equivale a 'y'
// || equivale a 'o'

//Condicional simple

if(num>0) console.log(`${num} es mayor que 0`);

//Condicional compuesto
if (num>0) {
    console.log( num + ' es mayor que 0');
}else{
    console.log(num + ' es menor que 0');
}

//condional multiple
if (num>0) {
    console.log( num + ' es mayor que 0');
}else if (num<0) {
    console.log(num + ' es menor que 0');
}else{
    console.log( num + ' es igual a 0');
}