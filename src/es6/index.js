//git init
//npm init

//Parametros por defecto y concatenación

function newFunction(name,age,country){
    var name = name || 'gian';
    var age = age || 32;
    var country = country || 'EC';
    console.log(name,age,country);
}

//es6
function newFunction2(name='gian',age=26,country='EC'){
    console.log(name,age,country);

}
newFunction2();
newFunction2('juan',23,'MX');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//destructuring

const obj = { nombre:'pepe', apellido: undefined };
const { nombre, apellido = "perez" } = obj;
console.log(nombre, apellido); // console output -> pepe perez 

//LET y CONST, Multilínea, Spread Operator y Desestructuración

let lorem = 'Hola que tal\n'
+" otra frase"
//es6
let lorem2 = `sige otra cosa
si o que SR
`
console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'bryan',
    'age': 23,
    'country': 'CO'
}
console.log(person.name,person.age);
//es6
let {name,age,country} = person;
console.log(name,age,country);


let team1=['gian','dany','jose'];
let team2=['valeria','carla','maria'];

let education = ['David',...team1,...team2];
console.log(education);

//let solo disponible en el scope, donde fue definida
//const inmutable

//Arrow Functions, Promesas y Parámetros en objetos

let name = 'gian'
let age =26;
//es5
obj = {name:name , age:age};
//es6
obj2 = { name,age};
console.log(obj2)

const names = [
    {name:'Sebas',age:30},
    {name: 'Yesica',age:25}
]

let listName = names.map(function(item){  
    console.log(item.name)
})
//con arrow function
let listName2 = names.map(item => console.log(item.name))
//otra forma de arrow function:
const listName3 = (name,age) => {
    ... //codigo
}

const listName4 = name => {
    ... //codigo
}
const square = num => num* num;


//promesas, para trabajar asincronismo
//promesas de que algo va a pasar

const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then (response => console.log(response))
    .then(() => console.log('hola gg'))
    .catch(error => console.log(error));


//Clases, Módulos y Generadores

class calcu{
    constructor(){   //constructor
        this.a=0;   //variables disponbibles en scope global
        this.b=0;
    }
    sum(a,b){     //metodo
        this.a = a;
        this.b = b;
        return a+b
    }
}

const c = new calcu();
console.log(c.sum(2,2)); //4

//modulos
//normalmente:
import {hello} from './module'
console.log(hello())

//como code runer usa node y usa la sintaxis Common JS Module, entonces la exportación es:
 module.exports = hello;
 //la importacion:
 const hello = requiere('./module');
 console.log(hello());

 //generator es una funcion especial que retorna una serie de valores segun el algorimo definido
function*helloWorld(){
     if(true){
        yield 'Hello, ';
     }
     if(true){
        yield 'World';
     }
 }
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);