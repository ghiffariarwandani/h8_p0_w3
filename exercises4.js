
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]


function dataHandling2 (data) { 

  var birthdate = ""
  var month = ""


  data.splice(1,4, "Roman Alamsyah ELsharawy" ,"Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

  console.log(data)

  birthdate = data[3].split('/')

  switch(birthdate[1]) {
    case '01':
    month = "Januari"
    break;

    case '02':
    month = "Februari"
    break;

    case '03':
    month = "Maret"
    break;

    case '04':
    month = "April"
    break;

    case '05':
    month = "Mei"
    break;

    case '06':
    month = "Juni"
    break;

    case '07':
    month = "Juli"
    break;

    case '08':
    month = "Agustus"
    break;

    case '09':
    month = "September"
    break;

    case '10':
    month = "Oktober"
    break;

    case '11':
    month = "November"
    break;

    case '12':
    month = "Desember"
    break;
  } 

  console.log(month)

   var mounthFall = birthdate.slice().sort(function(a,b){return b-a});
  console.log(mounthFall);

  var mounthStrip = birthdate.join("-");
  console.log(mounthStrip);

  var nama = data[1];
  namaSlice = nama.slice(0,15);
  
  console.log(namaSlice);
}


dataHandling2(input);