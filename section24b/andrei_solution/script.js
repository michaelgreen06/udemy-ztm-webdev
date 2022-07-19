const fs=require('fs');
// 1 - what floor does santa end at?
// ( santa  goes up 1 floor
// ) santa goes down 1 floor
function question1(){
  fs.readFile('./santa.txt', (err,data)=>{
    console.time('q1-santa-time');
    const directions=data.toString();
    const directionsArray=directions.split("");
    const answer=directionsArray.reduce((acc,currentValue)=>{
      if (currentValue==="("){
        return acc += 1
      }else if (currentValue===")"){
        return acc -= 1
      }
    },0)
    console.log("floor",answer);
    console.timeEnd('q1-santa-time');
  })
}

 question1();

//2 - position of first character that causes santa to enter basement?

function question2(){
  fs.readFile('./santa.txt',(err,data)=>{
    console.time('q2-santa-time');
    const directions=data.toString();
    const directionsArray=directions.split("");
    let accumulator =0;
    let counter = 0;
    const answer=directionsArray.some((currentItem)=>{
      if (currentItem==="("){
        accumulator += 1
      }else if (currentItem===")"){
        accumulator -= 1
      }
      counter ++;
      return accumulator <0;
    })
    console.timeEnd('q2-santa-time');
    console.log("basement entered at inst #:",counter);
  })
}


question2();


//