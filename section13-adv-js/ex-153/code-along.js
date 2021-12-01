const first= ()=>{
  const greet="hi";
  const second=()=>{
    alert (greet);
  }
  return second;
}

const newFunc=first();
newFunc();

//closures - a function ran. the function executed. It's never going to execute again
//BUT it's going to remember the references to those variables
//the child scope always has access to the parent scope

//currying - converting a function that takes multiple arguments into a
//function them one at a time
const multipy = (a,b) => a*b;
const curriedMultiply=(a)=>(b)=>a*b;
curriedMultiply(3)(4); //equals 12
const multipyBy5=curriedMultiply(5);

//compose - the act of putting 2 functions together to form a 3rd function
//where the output of one function is the input of the together
const compose=(f,g)=>(a)=>f(g(a)); //f & g ar both functions

const sum =(num)=> num+1;
compose(sum,sum)(5);

//avoiding side effects, functional purity.
var a=1;
function b(){
  a=3;
}

//deterministic - no matter what if inputs go through a function the
//output value will always be the same.
//It does not depend on any state, or data, change during a program’s execution. 
//It must only depend on its input elements
