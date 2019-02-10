function mengelompokkanAngka(arr) {
  var genap = []
  var ganjil = []
  var kelipatanTiga = []
  var result = []

  for(var i=0; i<arr.length;i++){
    if (arr[i] % 3 === 0){
      kelipatanTiga.push(arr[i])
    }else if(arr[i] % 2 === 0){
      genap.push(arr[i])
    } else if (arr[i] % 2 !== 0){
      ganjil.push(arr[i])
    }
  }
  result.push(genap, ganjil, kelipatanTiga)
  return result 
}