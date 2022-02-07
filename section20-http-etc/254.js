//finally

const urls=[
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url=>{
  return fetch(url).then(people=>people.json())
}))
  .then(array=>{
    throw Error;
    console.log('1',array[0]);
    console.log('1',array[1]);
    console.log('1',array[2]);
    console.log('1',array[03]);
  })
  .catch(err=>console.log('ughhh. fix it!',err))
  .finally(()=>console.log('extra'))


  //for await of

    const urls=[
      'https://jsonplaceholder.typicode.com/posts',
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/albums'
    ]

    const getData = async function() {
      try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
      } catch (err) {
        console.log('ooooooops', err);
      }
    }
//looping useing the familar for of loop
const loopThroughUrls=url=>{
  for(url of urls){
    console.log(url);
  }
}

//looping using for await of loop
const getData2=async function(){
  const arrayOfPromises=urls.map(url=>fetch(url))
  for await (let request of arrayOfPromises){
    const data= await request.json();
    console.log(data);
  }
}
