//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect
//the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//1). Understand - The function needs to take a color input as text then convert it into RGB format or HEX format
// I believe hex looks like: #fffff & RGB R()G()B()

//2). Plan - The function will recieve an input. That input will be pre-formated so we will know ahead of time whether
//it is rgb or hex. No, looks like I need to make it autodetect the format. it will have a convert function.
//that function will receive an input and based on the input it will konw if it is rgb or hex and will convert accordingly
//the hex format is easy because it is always the same. For simplicity I am just going to format RGB as rgb(r,g,b)

//3). Divide - I will start w/ converting hex into RGB

function rgbToHex(r, g, b) {}

//it may be easier to start w/ hex to decimal conversion. I think I need to use the table or hashmap of hex to dec values?
//to convert hex to dec in this example I know that the left digit of the 2 digits will be multiplied by 16 & the right digit
//will be multiplied by 1. I need to inspect each of the digits to get the corresponding decimal value that is multiplied by
//16 or 16^0(1). If I have AA I know it's 10*16+10*1. I looked for the key of A and found it's value was 10. So the function
//will need to determine the value based on the key. How do I inspect the input and match it to the items in the object?
//I need to find the key for a and multiply it's value by 16. Do I use a conditonal? Do I do some sort of matching?
//find the key that corresponds to a & return it's value. GPT says I should use a conditional to check ownProperties() of
//the object and return the obj[key] if it is true and return udefined if not.

// function valueRetreive(key) {
//   const obj = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15,
//   };
//   if (obj.hasOwnProperty(key)) {
//     return conversion(obj[key]);
//   } else {
//     console.log(key, " is not a valid hex digit");
//   }
// }

//the above function works for 1 input and only console logs. Next step is for it to take 2 inputs.

// function conversion(input) {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return input;
//   }
// }

function multiValue(a, b, c, d, e, f) {
  const r1 = valueRetreive(conversion(a));
  const r2 = valueRetreive(conversion(b));
  console.log("R= ", r1 * 16 + r2);
  const g1 = valueRetreive(conversion(c));
  const g2 = valueRetreive(conversion(d));
  console.log("G= ", g1 * 16 + g2);
  const b1 = valueRetreive(conversion(e));
  const b2 = valueRetreive(conversion(f));
  console.log("B= ", b1 * 16 + b2);
}

//now I don't love the way the HEX values need to be input. It would be nice if I could just enter it w/o needing
//to put everything in their own quote marks but insted could just enter ff00cc. This has been done so I know it is possible
//the problem is to separate each digit and put it in quote marks if it's a string. Maybe everything works fine if it's in
//quote marks so I could just put everything inside quote marks. This will work fine due to js's type coercion
//It's probably not the most elegant solution but it's the easiest so I will start w/ that. I need a function that
//separates an input into its individual digits. eg input -> "i","n","p"... I thnk i may need to use a for loop.
//I think for loops are specifically for arrays. Nope! strings are iterable!
//what happens when the loop iterates each time? I need it to turn each result into a variable. I know I could have it
//log to the console but that isn't helpful for this purupse. Before when I did this w/ an array I made an empty array
//called newArray then did newArry.string[i]. Maybe that is what I want to do here? If I use an array then multivalue function
//will loop through the array not create new variables. I will try this out.

function stringConvert(text) {
  const inputArray = [];
  for (let i = 0; i < text.length; i++) {
    inputArray.push(text[i]);
  }
  return inputArray;
}

//this above equation breaks an input into its constituent pieces. However, it doesn't differentiate between character types
//jk. I actually think it returns things as strings. this issue w/ this approach of having it as a globla variable & using push
//is that it's not getting reset after each time it is run. looks like moving inputArray to function scope solves the problem.
//so now the function does what I need it to. what can I do w/ this new array? How do I use the new array in the multiValues
//function? I think multiValues would have to turn into a for loop.
//inputArray needs to go through the valueRetreive function so we can convert hex to dec. I will make a new array w/ these
//values which then will go through the process of getting converted by doing the prescribed multiplication operations.

function multiValueFor(arr) {
  const decArray = [];
  for (let j = 0; j < arr.length; j++) {
    decArray.push(valueRetreive(arr[j]));
  }
  return decArray;
}

//Here is how things work if I'm right and scope weren't important. stringConvert() iterates over the input string and outputs
//each character as a string in the inputArray[]. Then inputArray[] is the Array that goes into multiValueFor which iterates
//over each element and does the value retreival. multiValueFor() returns decArray which then needs to have elements [0] & [1]
//multiplied by specific values, namely 16 & 1. I am making these all as separate functions RN but the will all be combined into
//one function at the end.

function conversion1(arr) {
  const r = arr[0] * 1 + arr[1] * 16;
  const g = arr[2] * 1 + arr[3] * 16;
  const b = arr[4] * 1 + arr[5] * 16;
  alert(`rgb(${r}, ${g}, ${b})`);
}

//Now I think I can start combining some of these functions so everything will work. I need to think about scope.

function conversion(input) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input;
  }
}

function valueRetreive(key) {
  const obj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    console.log(key, " is not a valid hex digit");
  }
}

function hex2Dec(text) {
  const inputArray = [];
  for (let i = 0; i < text.length; i++) {
    inputArray.push(conversion(text[i]));
  }
  const decArray = [];
  for (let j = 0; j < inputArray.length; j++) {
    decArray.push(valueRetreive(inputArray[j]));
  }
  const r = decArray[0] * 1 + decArray[1] * 16;
  const g = decArray[2] * 1 + decArray[3] * 16;
  const b = decArray[4] * 1 + decArray[5] * 16;
  alert(`rgb(${r}, ${g}, ${b})`);
}

//The above dec to hex function works and will even accpet lowercase letters in the input. Now I need to make
//the function that takes an rgb input and returns the hex string.

function dec2Hex(input) {
  return input.toString(16);
}
//^^^this will work for digits up to 255 and we need to make a feature that returns an error when the user enters
//a value greater than 255. I also need to figure out how to format the input. I would expect the input to be separated by
//commas. My input will be formatted as rgb(rrr,ggg,bbb). so I will need to figure out how to separate each component out
//to be fed into the dec2Hex function. If the input is accepted as an array it could already be separated. The issue is that
//the dec2Hex function needs to be run on each component individually. So dec2Hex runs for rrr then stores that value as the
//R variable. then it runs for ggg then stores that value for the G variable etc. How do I make it do this?
//1) - understnad the problem.
//something needs to take 3 distinct inputs and convert them into their hexadecimal equivalents then return them all & add
//a # to the beginning of that string.
//2) - plan
//The input will be rgb(rrr,ggg,bbb) then each of the components will get fed to the dec2Hex function which will add up
//each output and then add a # to it and will alert that value
//3) - divide
//the smallest simplest task at this point is to take an input that is separated by commas and turn it into an array?
//according to chatGPT I can use the split() method to split the input based on the comma.

//a) split the input into an array

function inputSplit(input) {
  return input.split(",");
}

const arrayValues = input.split(",").map(Number);

function inputSplit(input) {
  return input.split(",").map(Number);
}

function inputArray(...input) {
  let newArray = [input];
  return newArray;
}
