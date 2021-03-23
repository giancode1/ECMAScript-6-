let array = [1,2,3,[1,2,3,[1,2,3]]]

//flat recibe como argumento la profundidad
console.log(array.flat())
console.log('')
console.log(array.flat(2)) 

/////////
let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value,value*2]))
//mapea los elementos, imprimer priemr valor, luego lo multiplica y asi

////
//me permite eleiminar los espacios en blanco de un string
 let hello = '    hello   world    sipi  '
 console.log(hello)
 console.log(hello.trimStart())
 console.log(hello.trimEnd())

//////////////////
 try{

 }catch{  //ya no es necesario poner error justo aqui
     error
 }

 ///////
 //transforma arreglo a objetos o alreves segun sea el caso
 let entries = [["name","gian"],["age",99]]
 console.log(Object.fromEntries(entries))

 ////objeto de tipo simbolo el cual nos permite acceder a una descripcion
 let mySmbol = 'My Symbol'
 let symbol = Symbol(mySmbol)
 console.log(symbol.description)


 
