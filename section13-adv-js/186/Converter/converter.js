document.getElementById("convert").onclick = function () {
  sanityCheck();
};
const text = document.getElementById("input");
function sanityCheck() {
  console.log(document.getElementById("input"));
}

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
