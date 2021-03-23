// ...operador de reposo, el cual puede extraer las prop de un obj que aun no se ha construido
const obj ={
    name: 'oscar',
    age: 32,
    country: 'MX'
}
console.log(obj) //deberia descontruir para llamar algo en especifico , y para esto me sirve lo de abajo:

let{age,...all} = obj;  //aqui no hace una copia, le dice valores age, ...all vienen de obj
console.log(age,all)

let{country,...todolodemas} = obj;
console.log(todolodemas)  //para no esatr descontruyendo el objeto

/////////////////////// otro:
//utilizando las propeidades de propagacion vamos a poder unir obj a un nuevo obj

const persona ={
    name: 'Gian',
    age: 26,
    color: 'azul'
}
const persona2 ={
    ...persona,
    country: 'EC'
}
console.log(persona) 
console.log(persona2)

////////// agregado el finally

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (true)
        //? resolve('Hello World!')  
        // si queremos ahcerlo un poco mas compleja:
        ?setTimeout((() => resolve('Hello World!')),3000)
        : reject(new Error('Test Error'))
    })
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

/// 
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-03-01');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)