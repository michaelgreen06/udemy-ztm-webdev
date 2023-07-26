// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
//-9007199254740991
// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n;
//because we are trying to add different types. EG number + bigInt.
//We either need to add an n to 3 & 4 or remove it from 1n.

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lightning",
    friend: {
      charizard: {
        species: "Dragon Pokemon",
        height: 1.7,
        weight: 90.5,
        power: "fire",
      },
    },
  },
};

let andrei_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};

if (
  andrei_pokemon &&
  andrei_pokemon.raichu &&
  will_pokemon &&
  will_pokemon.pikachu &&
  will_pokemon.pikachu.friend &&
  will_pokemon.pikachu.friend.charizard
) {
  console.log("fight!");
} else {
  console.log("walk away...");
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
  console.log("fight!");
} else {
  console.log("walk away...");
}

// Exercise 4: What do these each output?
console.log(false ?? "hellooo");
// this is using the nullish coalescing operator. it only returns the right-hand
//side operand if the left-hand side operand is null or undefined. It ignores falsy
//values like false, 0, an empty string (""), and NaN
// this logs false
console.log(null ?? "hellooo");
//same as above. logs "hellooo"
console.log(null || "hellooo");
//this is using the logical OR operator
//logs "hellooo"
console.log((false || null) ?? "hellooo");
//1st result is null & we're using nullish coalescing so it logs hellooo
console.log(null ?? (false || "hellooo"));
//"hellooo"
