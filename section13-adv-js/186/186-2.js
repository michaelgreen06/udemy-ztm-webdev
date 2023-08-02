//Question 2: Write a javascript function that takes an array of numbers and a target number. The function s
//hould find two different numbers in the array that, when added together, give the target number. For example:
//answer([1,2,3], 4) should return [1,3]

//1) understand problem - the function needs to accept an array and a target number. The function needs to
//determine which 2 numbers in the array add up to the target number. it also needs to have an output if the numbers
//in the array don't add up to the target number.

//2)PLAN - the function will loop through the array. It will add the 1st & 2nd number & test if they === the target
//number, if they don't then it will take the 1st number & the 3rd number & add them up. It will do this for the 1st
//number & all other numbers in the array. If none of these combos === the target number then it will take the 2nd
//number & add it to the 3rd number. The problem doesn't allow numbers to be added to themselves & the 2ne
//number has already been added to the 1st so there is no need to try that combo again. The function will go through
//all numbers of the array in this fashion until it finds a match. If it finds a match it will return an array of the 2
//numbers that are added to reach the target number. If it goes through the whole array and nothing adds up to equal the target
//number it will alert("there is no match for the target number")

//3 divide
//loop through the array & add arr[i] & arr[i+1]

const numArray = [1, 2, 3, 4, 5, 6, 7];

function adding(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i], arr[j]);
        return result;
      }
    }
  }
  if (result.length === 0) {
    alert(`😭 No combo of numbers in the array equals ${target}`);
  }
}

//the above gives an array w/ the result of adding each array element together 1 time. The issue is that it contains all element
//addition results. We need to do some type of check on the new result array. now we need to check if adding result array[i]
//& result[j]=target then & only then do we return the result2 array that contains those numbers
