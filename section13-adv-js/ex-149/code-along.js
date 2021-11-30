condition ? expr1:expr2;

function isUserValid (bool){
  return bool;
}

var answer=isUserValid(true) ? "You may Enter" : "GTFO!!!";

var automatedAnswer= "Your acct # is " + (isUserValid(false)?"123445":"No info for you!");


//switch operator

function moveCommand(direction){
  var whatHappens;
  switch (direction){
    case "forward":
      whatHappens="you encounter a monster!";
      break;
    case "back":
      whatHappens="you arrived home!";
      break;
    case "right":
      whatHappens="you found a river!";
      break;
    case "left":
      whatHappens="you run into a troll";
      break;
    default:
      whatHappens="Please enter a valid direction.";
  }
      return whatHappens;
}
