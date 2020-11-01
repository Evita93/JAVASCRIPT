let num = 4;

switch (num) {
    case 1: console.log('Tiene el valor 1');
        break;
        case 2 : console.log('Tiene el valor 2');
        break;
    default: console.log('Num no tiene valor');
       
}

//sintaxis multiple encadenada
switch (num) {
    case 1: 
    case 3 :
    case 5:
        console.log( num + " es impar");
    break;
    case 2:
    case 4:
    case 6:
        console.log(num + " es par");
    break;
    default: console.log('Num no tiene valor');
       
}