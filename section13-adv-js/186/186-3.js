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

//the above function works for 1 input and only console logs. Next step is for it to take 2 inputs.

function multiValue(a, b, c, d, e, f) {
  const r1 = valueRetreive(a.toUpperCase());
  const r2 = valueRetreive(b.toUpperCase());
  console.log("R= ", r1 * 16 + r2);
  const g1 = valueRetreive(c.toUpperCase());
  const g2 = valueRetreive(d.toUpperCase());
  console.log("G= ", g1 * 16 + g2);
  const b1 = valueRetreive(e.toUpperCase());
  const b2 = valueRetreive(f.toUpperCase());
  console.log("B= ", b1 * 16 + b2);
}

//the above function needs to include conditionals that only convert to upper case if it is a string. otherwise, we
//shouldn't be applying the toUpperCase() method to numbers
