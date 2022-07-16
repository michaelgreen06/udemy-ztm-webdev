const fs=require('fs');
// 1 - what floor does santa end at?
// ( santa  goes up 1 floor
// ) santa goes down 1 floor
function question1(){
  fs.readFile('./santa.txt', (err,data)=>{
    const directions=data.toString();
    const directionsArray=directions.split("");
    const answer=directionsArray.reduce((acc,currentValue)=>{
      if (currentValue==="("){
        return acc += 1
      }else if (currentValue===")"){
        return acc -= 1
      }
    },0)
    console.log(answer);
  })
}

question1();
//2 - position of first character that causes santa to enter basement?
