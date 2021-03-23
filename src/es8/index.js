//
const data = {
    fronted: 'Gian',
    backend: 'Isabel',
    design: 'Ana',
}
//transformar este objeto a una matriz :
const entries = Object.entries(data); 
console.log(entries);
console.log(entries.length);
console.log(typeof(entries))


//me devuelve los valores de un objeto a un arreglo
const values = Object.values(data);
console.log(values);
console.log(values.length);

//
const s='hello';
console.log(s.padStart(7,'hi'))  //hihello
console.log(s.padEnd(18,'---gg'))  //hihello
//para que me sirve esto, por ejm cuando queramos presentar la lista de un menu, o productos
console.log('food'.padEnd(12,'----'));


//
const obj = {
    name: 'gian',  // , ya no da error
}

////////  Async y Await //////////

const helloWorld = () => { //arrow function
    //promesa:
    return new Promise((resolve,reject)=>{
        (true)//prueba poniendo false y veras una ruta con todo la inf del error, tendras un camino para ver por donde nuestra aplicacion no cumplio lo esperado
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld(); //helloWorld es la promesa
    //const hello2 = await otrafuncion();
    console.log(hello)
}
helloAsync();
//
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}
anotherFunction();