//refernce type
var object1={value:10};
var object2=object1;
var object3={value:10};


//context vs scope - scope is created w/ curly brackets
//context is where we are w/in the object
//this refers to the object it's inside of
const object4={
  a:function(){
    console.log(this);
  }
}

//instantation-when you make a copy of an object and re-use the code
class Player {
  constructor(name, type){
    console.log('player',this);
    this.name=name;
    this.type=type;
  }
  introduce(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

//creating a wizard player
class Wizard extends Player{
  constructor(name,type){
    super(name,type);
      console.log('wizard', this);
  }
  play(){
    console.log(`Weeeeeeee! I'm a ${this.type}`);
  }
}

const wizard1=new Wizard("shelly","healer");
const wizard2=new Wizard("Shawn","dark magic");
