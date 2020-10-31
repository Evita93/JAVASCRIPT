const numbers = document.getElementById('numbers'); //para coger las id de html
const result = document.getElementById('result');

let a=prompt('Introduzca el primer numero');
let b=prompt('Introduzca el segundo numero');
let c=prompt('Introduzca el tercer numero');

numbers.textContent = 'Los numeros son : ' + a +" " + b + " " + c ; // imprimimos por html

if (a>=b && a>=c) {
    if (b>c) {
        result.textContent = 'El orden es ' + a + b + c ;
        
    }else{
        result.textContent = 'El orden es ' + a +  c +  b;
    }
    
} else if (b>=a && b>=c) {
    if (a>c) {
        result.textContent =' el ordene es ' + b + a+ c;
        
    }else{
        result.textContent = 'el orden es ' +  b + c +a;
    }
    
} else if (c>=a  && c>=b) {
    if(a>b){
        result.textContent =' el ordene es ' + c + a + b;
    }else{
        result.textContent =' el ordene es ' +  c +  b + a;
    }
    
}