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

//this above function breaks an input into its constituent pieces. However, it doesn't differentiate between character types
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

//The above hex2dec function works and will even accpet lowercase letters in the input. Now I need to make
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

// function inputSplit(input) {
//   return input.split(",");
// }

// const arrayValues = input.split(",").map(Number);

// function inputSplit(input) {
//   return input.split(",").map(Number);
// }

function inputArray(...input) {
  let newArray = [input];
  return newArray;
}

//Yesterday I determined how to get the inputs from function parameters into an array using something syntax.
//I think I just need to use the spread operator in the input parameter of the function. Yes! the above function
//inputArray does what I need. Now I know how to get the inputs into an array what is next??? I have the dec to hex function
//created already. Now I need to make it accept the elements in the input array.

// current progress:

function dec2Hex(input) {
  return input.toString(16);
}

function inputArray(...input) {
  let newArray = [input];
  return newArray;
}

//have dec2Hex loop through inputArray

function convert(...input) {
  let result = [];
  for (i = 0; i < input.length; i++) {
    result.push(input[i].toString(16));
  }
  const result2 = result.join("");
  return "#" + result2;
}
//When I was implementing the inputArray functionality I actually didn't need to have a newArray because ...input
//gets formated as an array. I can't push to an empty string but can push to an empty array. I could push to the
//array and then turn that into a string but I don't know if that's the best method.

//^^^ convert works!

//now I need to combine the above 2 functions w/ a conditional so that when a user inputs data it will detect which
//type of color is input and run the correct function. I may want to add additional logic that handles formatting of the
//input. EG if someone puts in #23fa3b it should work. I also need to be able to handle someone inputting rgb different ways
//How much effort do I want to put into this? I will make it a step above minimal but it's not going to be perfect at all.
//what cases do I want to handle? hex w/ & w/0 a #. rgb w/ & w/o commas or rgb w/ & w/o rgb? I'm not doing any rgb formatting

//function to handle hex input w/ #. if input contains # drop the #. Needs to detect if input starts w/ # I bet regexp
//would be best for this. I wonder if I can do it w/o reg exp? the logic needs to check if input starts w/ #. I can use
//the built in startsWith() string method to check if it starts w/ #. how do I drop # if the string starts w/ #?

function replace(input) {
  if (input.startsWith("#")) {
    return input.replace("#", "");
  } else {
    return input;
  }
}

//^^^ Works! This was the only thing I wanted to add. I will make an html page for this.

//final functions:
//RGB to Hex:

function dec2Hex(...input) {
  let result = [];
  for (i = 0; i < input.length; i++) {
    result.push(input[i].toString(16));
  }
  const result2 = result.join("");
  return "#" + result2;
}

//Hex to RGB:

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
  let input;
  if (text.startsWith("#")) {
    input = text.replace("#", "");
  } else {
    input = text;
  }
  const inputArray = [];
  for (let i = 0; i < input.length; i++) {
    inputArray.push(conversion(input[i]));
  }
  const decArray = [];
  for (let j = 0; j < inputArray.length; j++) {
    decArray.push(valueRetreive(inputArray[j]));
  }
  const r = decArray[0] * 1 + decArray[1] * 16;
  const g = decArray[2] * 1 + decArray[3] * 16;
  const b = decArray[4] * 1 + decArray[5] * 16;
  return `rgb(${r}, ${g}, ${b})`;
}

//I left off w/ hex2Dec working? Yes! It now removes the # if it is entered. The function doesn't auto-detect and convert
//based on input format yet. I will make a conditional that causes hex2Dec to run if 6 characters are input and dec2Hex
//to run if 3 commas are present. Else it will alert "Invalid Input Format. Please enter #xxxxxx or xxx,x,x"
//dec2Hex is input w/ 3 commas no (). I am not worrying about it being formatted for ().

//autodetect conditional: The problem is to get the proper function to run based on the input format. Maybe I could
//do if "." exisits then run dec2Hex. I want there to be 3 , b4 running dec2Hex. includes() might work

//inlcudes test function (this method only works w/ strings)
function testIncludes(text) {
  if (text.includes(",")) {
    return "check";
  } else {
    return "no go";
  }
}
//this doesn't universally work w/ the current setup because it's a string method.

//I think I have a problem w/ how these are formatted because input my be a string or it may be numbers
//needing to enter strings for one function and not enter strings for the other function is bad design and I can do
//better. maybe the solution is to have all input as string by default? hex2RGB is def designed to take strings as an input
//which I am totally fine w/. The question is: can I format it so no matter the way something is input it is taken as a string?
//Surely that is possible. If input includes "" then return input. if input doesn't include "" then add ""
//js has a built in String method that converts any input into a string. I imagine type coercion still works w/ the new string

//simple function to convert an input to a string
function toString(input) {
  return String(input);
}

//includes test w/ toString functionality
function testIncludes(input) {
  let text = String(input);
  console.log(text);
  if (text.includes(",")) {
    return "check";
  } else {
    return "no go";
  }
}
//looks like etnering a comma messes things up for this function I will find out why that is the case.
//commas are used for multiple variable declarations and this is causing a syntax error. so how do I allow somone to
//enter numbers separated by commas then convert it into a string? I know it's possible because I do it in the w3 color
//picker. I want to be able to put in color values w/o needing to put in quotes. write a function that can receive input
//from a user and then turn it into a string. here is an example of an expected input from the user: 123, 3, 23
//the question is: am I designing this function to work w/ an HTML elemenet or am I designing it to work w/ the user
//passing in inputs? I want to make it as a simple page so I'll go the HTML element approach. I think if this were
//receiving input directly from a user then they'd be expected to enter things w/ the correct type. I am going to make
//a simple html page and am not going to try to figure out how this works if things are input directly
//all HTML input values are strings and this is how I am going to get the input from users. Therefore I should expect
//all input to be of string type. I need to convert the dec2hex function to work w/ a string. I think I spent sometime
//trying to figure out how to make it work by directly taking numbers previously.

//to get dec2Hex to work I need to modify it to directly accept a string input then convert it into a number.
//currently I have:
function dec2Hex(...input) {
  let result = [];
  for (i = 0; i < input.length; i++) {
    result.push(input[i].toString(16));
  }
  const result2 = result.join("");
  return "#" + result2;
}
//i think I need to eliminate the rest parameter because it turns number inputs into an array and I have string inputs
//how do I turn a string into a number? I will use the inbuilt Number() function

function numberizer(string) {
  return Number(string);
}
//^^^This only works if there is just one string to convert into a number. how do we handle the case when there are commas?
//we could do some kind of split at the commas? Yes! This is what chatGPT recommended. Good job MG! the split method will
//split the input into multiple individual strings.

function rgb2Hex(input) {
  let result = [];
  let input2 = input.split(",");
  for (i = 0; i < input2.length; i++) {
    result.push(Number(input2[i]).toString(16));
  }
  const result2 = result.join("");
  return "#" + result2;
}

// this returns an array of strings. I think I have to loop through the strings & apply Number() to turn them into
//numbers so I can then run toString(16).
//rgb2Hex works now w/ string inputs! 🥳
//Not exactly sure where I left off on Weds. I remember learning that html inputs return strings. The above function
//works w/ strings which means it will work w/ HTML input elements. I believe my hex to RGB also works w/ strings
//but I will verify quickly. Yes! Both functions work w/ strings. Now I need to setup an HTML file that allows a user
//to input data then hit the convert button and the functions will run. I need to make a function that tests the input
//& runs the proper function based on what the input is.

//1) Understand - determine if there is a comma present in the input. If there is then run rgb2Hex, else run hex2RGB
//2) Plan - I will test for a comma then run RGB2Hex otherwise will run hex2RGB

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

function testAndConvert(text) {
  if (text.includes(",")) {
    let result = [];
    let input2 = text.split(",");
    for (i = 0; i < input2.length; i++) {
      result.push(Number(input2[i]).toString(16));
    }
    const result2 = result.join("");
    return "#" + result2;
  } else {
    let input;
    if (text.startsWith("#")) {
      input = text.replace("#", "");
    } else {
      input = text;
    }
    const inputArray = [];
    for (let i = 0; i < input.length; i++) {
      inputArray.push(conversion(input[i]));
    }
    const decArray = [];
    for (let j = 0; j < inputArray.length; j++) {
      decArray.push(valueRetreive(inputArray[j]));
    }
    const r = decArray[1] * 1 + decArray[0] * 16;
    const g = decArray[3] * 1 + decArray[2] * 16;
    const b = decArray[5] * 1 + decArray[4] * 16;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
