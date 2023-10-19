const yeniSatir = "\r\n"

let turkceDogru, turkceYanlis = 0
let matDogru, matYanlis
let sosDogru, sosYanlis
let fenDogru, fenYanlis
let puan = 0

let mesaj = "TYT Puan Hesaplama uygulamasına hoşgeldiniz!" + yeniSatir
    + "1-Puan hesapla" + yeniSatir
    + "2-Çıkış yap";
let sayi = prompt(mesaj)

switch (sayi) {
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz"))

        turkceDogru = Number(prompt("Türkçe doğru sayınızı giriniz"))
        turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz"))

        matDogru = Number(prompt("Matematik doğru sayınızı giriniz"))
        matYanlis = Number(prompt("Matematik yanlış sayınızı giriniz"))

        sosDogru = Number(prompt("Sosyal doğru sayınızı giriniz"))
        sosYanlis = Number(prompt("Sosyal yanlış sayınızı giriniz"))

        fenDogru = Number(prompt("Fen doğru sayınızı giriniz"))
        fenYanlis = Number(prompt("Fen yanlış sayınızı giriniz"))

        let dogrular = turkceDogru + matDogru + sosDogru + fenDogru;
        let yanlislar = turkceYanlis + matYanlis + sosYanlis + fenYanlis;
        let net = dogrular - (yanlislar / 4);
        puan = (net * 4) + okulPuani + 100;
        alert("TYT puanınız : " + puan)
        break;

    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;
    default:
        alert("Lütfen geçerli bir değer giriniz !")
        break;
}