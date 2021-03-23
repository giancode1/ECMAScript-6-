////////  Async y Await //////////  gc
const helloWorld = () => { //arrow function
  //promesa1:
  return new Promise((resolve,reject)=>{
      (true)
      ? setTimeout(() => resolve('Hello World'),3000)
      : reject(new Error('Test Error'))
  })
}
const helloWorld2 = () => { //arrow function
  //promesa2:
  return new Promise((resolve,reject)=>{
      (true)
      ? setTimeout(() => resolve('Hello World2'),1000)
      : reject(new Error('Test Error2'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld(); 
  const hello2 = await helloWorld2();
  console.log(hello)
  console.log(hello2)
  console.log('HOLA')
}
helloAsync();
//Hello World
//Hello World2
//HOLA