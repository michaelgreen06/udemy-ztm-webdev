//ES2020!
//BigInt
//Nullish coalescing Operator??
//Optional chaining operator?.
//promise.allSettled
//globalThis

//BigInt is a new type. It can be defined by putting an n after each number
// Number.MAX_SAFE_INTEGER=9007199254740991

//Optional chaining operator
let will_pokemon={
  pikachu:{
    species:"mouse pokemon",
    height:0.4,
    weight:6
  }
}
let andrei_pokemon={
  raichu:{
    species:"mouse pokemon",
    height:0.8,
    weight:39
  }
}

let weight=will_pokemon.pikachu.weight
console.log("weight:",weight);

let weight2=andrei_pokemon.pikachu.weight
console.log("weight:",weight);

//what it looks like w/o optional chaining
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
  let weight2=andrei_pokemon.pikachu.weight
  console.log(weight2);
}else {
  let weight2=undefined;
  console.log(weight2);
}

//what it looks like w/ otional chaining
let weight3=andrei_pokemon?.pikachu?.weight
console.log(weight3);

//Nullish coalescing Operator
// uses ?? instead of ||

let andrei_pokemon={
  pikachu:{
    species:"mouse pokemon",
    height:0.8,
    weight:39,
    power:'lightning'
  }
}
//using the traditional || or Operator
//this gives no power even if power:'' or power: false
let power=andrei_pokemon?.pikachu?.power||'no power!'

//using the nullish coalescing operator ??
//this operator only checks if it's null or undefined
let power=andrei_pokemon?.pikachu?.power??'no power!'





jlkj
