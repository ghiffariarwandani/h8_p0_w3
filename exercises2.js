

function balikString(str) {

var arr = []

  for(i=str.length-1; i>=0; i--){
    arr += str[i]
  } 
  return arr 
} 

console.log(balikString('Hello Words'))