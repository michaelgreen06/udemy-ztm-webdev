const promise= new Promise((resolve,reject)=>{
if(true){
  resolve('Stuff Worked!');
}else{
  reject('It broke :<');
}
})

promise.then(result=>console.log(result));

promise
.then(result=>result + '!')
.then(result2=>{
  console.log(result2);
})

const promise2=new Promise((resolve,reject))=>{
  setTimeout(resolve,100,'hiiiii')
}

const promise3=new Promise((resolve,reject))=>{
  setTimeout(resolve,1000,'hiiiiipoopie')
}

const promise4=new Promise((resolve,reject))=>{
  setTimeout(resolve,3000,'where are you?!')
}

Promise.all([promise, promise2, promise3, promise4])
  .then(values=>{
    console.log(values);
  })


const urls=[
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url=>{
  return fetch(url).then(resp=>resp.json())
})).then(results=>{
  console.log(results[0]);
    console.log(results[1]);
      console.log(results[2]);
}).catch(()=>console.log('errror'));
