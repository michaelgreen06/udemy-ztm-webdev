//og code
const flattened=[[0,1],[2,3],[4,5]].reduce(
(a,b)=>a.concat(b),[]);

//step 1 read the code!
//change names so they make more sense


const flattened=[[0,1],[2,3],[4,5]].reduce(
(accumulator,array)=>{
  console.log('array',array);
  console.log('accumulator',accumulator);
  return   accumulator.concat(array)
},
  []);

  //instead of usiing console.log(); you can use debugger
  //debugger tells the JS engine to stop right when it sees it
  //hitting play resumes the engine
  //hitting step over moves it to the next step in the code
  
