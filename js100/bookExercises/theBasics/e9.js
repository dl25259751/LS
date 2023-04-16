let petNames =['Asta','Butterscotch','Pudding','Neptune','Darwin'];
let petType =['dog','cat','cat','fish','lizard']

let pets ={}

for(let idx =0; idx<petNames.length;idx++) {
  pets[petNames[idx]] = petType[idx];
}

for( pet in pets) {
  console.log(`${pet} : ${pets[pet]}`);
}