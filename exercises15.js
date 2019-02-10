function groupAnimals(animals) {
  
  var patch;
  var hasil = [];
  

  for(var i=0; i<animals.length ; i++) {
    for(var j=0 ; j<animals.length-i ; j++) {
      if(animals[j]>animals[j+1]) {
        patch = animals[j]
        animals[j] = animals[j+1]
        animals[j+1]= patch
      }
    }
  }

  for (var i=0; i<animals.length; i++){
    
    var found = false;
    
    for(var j=0; j<hasil.length; j++){
      if(hasil[j][0][0]===animals[i][0]){
        hasil[j].push(animals[i]);
        found =  true;
        break;
      }
    }

    if(!found){
      hasil.push([animals[i]]);
    }
  }

  return hasil; 
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));