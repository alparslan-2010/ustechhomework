

let a = "\n\r"
let ay = prompt("LUTFEN DOGUM TARIHINIZI SECIN"
    + a + "1- 21 Mart- 20 Nisan"
    + a + "2- 21 Nisan – 20 Mayıs"
    + a + "3- 21 Mayıs – 21 Haziran"
    + a + "4- 20 Haziran – 22 Temmuz"
    + a + "5- 23 Temmuz – 23 Ağustos"
    + a + "6- 24 Ağustos – 23 Eylül"
    + a + "7- 24 Eylül – 23 Ekim"
    + a + "8- 24 Ekim – 22 Kasım"
    + a + "9- 23 Kasım – 21 Aralık"
    + a + "10- 22 Aralık – 19 Ocak"
    + a + "11- 20 Ocak – 18 Şubat"
    + a + "12- 19 Şubat – 20 Mart")


switch (ay) {

    case "1":

        document.getElementById('burc').innerHTML = "koc burcusun";
        alert("koc burcusun")
        break;
    case "2":
        document.getElementById('burc').innerHTML = "Boga burcusun";
        alert("Boga burcusun")
        break;
    case "3":
        alert("Ikizler burcusun")
        break;
    case "4":
        alert("Yengec burcusun")
        break;
    case "5":
        alert("Aslan burcusun")
        break;
    case "6":
        alert("Basak burcusun")
        break;
    case "7":
        alert("Terazi burcusun")
        break;
    case "8":
        alert("Akrep burcusun")
        break;
    case "9":
        alert("Yay burcusun")
        break;
    case "10":
        alert("Oglak burcusun")
        break;
    case "11":
        alert("Kova burcusun")
        break;
    case "12":
        alert("Balik burcusun")
        break;
    default:

        alert("Gecerli bir rakan girip tekrar secim yapiniz")

}



// let month= "1";
// let day = 12;

// if (month=="mart" && day<20 ){
// return console.log("balik burcusun")

// }


