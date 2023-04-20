function total(arr) {
  return arr.reduce((total,element) => total + element, 0);
}

console.log(total([1,2,3])); // 6

function stringConcat(arr) {
  return arr.reduce((string,element) => string + element, "");
}

console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
  return arr.reduce((voteCt,obj) => {
    if(obj['voted'] === true){
      voteCt++;
    }
    return voteCt;  
  }
  ,0
  )   
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  return arr.reduce((total,obj) => {
    total += obj['price'];
    return total;
  }
  ,0)   
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  return arr.reduce((newArr,currArr) =>{
    newArr = newArr.concat(currArr);
    return newArr;
  },[])    
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
 return arr.reduce((newObj,currObj) =>{
  if(currObj['age']>35){
    newObj["numOldPeople"]++;
    if(currObj['voted']){
      newObj["numOldVotes"]++;
    }
  }
  else if(currObj['age']>25){
    newObj["numMidPeople"]++;
    if(currObj['voted']){
      newObj["numMidVotes"]++;
    }
  }
  else{
    newObj["numYoungPeople"]++;
    if(currObj['voted']){
      newObj["numYoungVotes"]++;
    }
  }
  return newObj;
 }
 ,{
  numYoungVotes:0,numYoungPeople:0,
  numMidVotes:0,numMidPeople:0,
  numOldVotes:0,numOldPeople:0
  }
 )
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/