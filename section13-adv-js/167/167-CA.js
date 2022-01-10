//flat is a method that can be used on arrays
const array=[1,[2,3],[4,5]]
array.flat();

const array3=[1,2,[3,4,[5]]]
array3.flat();

const entries=["bob",'sally',,,,,,'comdu']
entries.flat();

//uses basic map function then flattens the result to a depth of 1 update
flatMap()
const jurassicParkChaos=jurassicPark.flatMap(creature=>creature + "🐱‍🐉")

//trim!
const userEmail='   eddytheeagle@gmail.com'
const userEmail2='jonnydangerous@gmail.com    '
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries - transforms a list of key-value pairs into an object
userProfiles=[['commanderTom',23],['derekZlander',40],['hansel',18]]
Object.fromEntries(userProfiles);

//.entries method does the exact opposite! transforms object into array
userProfiles=[['commanderTom',23],['derekZlander',40],['hansel',18]]
const obj=Object.fromEntries(userProfiles);
Object.entries(obj);

//try catch block
//allows us to try code and catch if there are any errors
try{
  true + 'hi'
}catch{
console.log('you messed up!');
}
