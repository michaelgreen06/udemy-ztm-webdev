//let+const

const player="Bobby";
let experience = 100;
let wizardLevel=false;

if (experience>90){
  let wizardLevel=true;
  console.log('inside', wizardLevel);
}

console.log('outside',wizardLevel);

const obj={
  player:"bobby",
  experience:100,
  wizardLevel:false
}

//destructuring
const obj={
  player:"bobby",
  experience:100,
  wizardLevel:false
}
const player=obj.player;
const experience=obj.experience;
let wizardLevel=obj.wizardLevel;

const {player, experience}=obj;
let {wizardLevel}=obj;

//object properties
const name = "edward snowden";
const obj={
  [name]:"hello",
  ["ray"+"smith"]:"hihi"
}

//template strings

const name="sally";
const age=35;
const pet="spider";
const greetingBest=`Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`

//default arguments
function greet(name='', age=30,pet='cat'){
  return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
}

//symbol

let sym1=symbol();
let sym2=symbol('foo');
let sym3=symbol('fooo');

//arrow functions

function add (a,b){
  return a+b;
}

const add2 = (a,b) =>a+b;
