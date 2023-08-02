//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect
//the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

//1). Understand - The function needs to take a color input as text then convert it into RGB format or HEX format
// I believe hex looks like: #fffff & RGB R()G()B()

//2). Plan - The function will recieve an input. That input will be pre-formated so we will know ahead of time whether
//it is rgb or hex. No, looks like I need to make it autodetect the format. it will have a convert function.
//that function will receive an input and based on the input it will konw if it is rgb or hex and will convert accordingly
//the hex format is easy because it is always the same. For simplicity I am just going to format RGB as rgb(r,g,b)

//3). Divide - I will start w/ converting hex into RGB

function hexToRGB(r, g, b) {}
