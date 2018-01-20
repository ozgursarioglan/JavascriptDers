

var shiftStart =  new Date(2018, 1, 19, 9, 0);
var shiftEnd = new Date(2018, 1, 19, 19, 0);



var t = shiftEnd - shiftStart


function sadecesaat(t){ 
	var ch = 60 * 60 * 1000; 
	h = Math.floor(t / ch); 
	return h;
	console.log(h)
	} 



/*

var sayi1 = 100;
var sayi2 = 150;
var sayi3 = 200;

if (sayi1+sayi2 < sayi3) {

   console.log("selam buraya girdim")

} else {

	console.log("koşul sağlanamadı")

}

var ad = "ozgur";
var soyad = "sarıoğlan";
var yas = 23;
var okul= "sütçü imam";
var is = "markada";
var tel = "5301854680"
var birlesik = ad +" "+ soyad+" "+ yas +" "+ okul +" "+ is +" "+ tel;

console.log("Benim adım: " +ad);
console.log("Benim Soyadım: " +soyad);
console.log("Benim Yaşım: " +yas);
console.log("Benim Okulum: "+okul);
console.log("Benim İşim: "+is);
console.log("Benim telefonum: "+tel);

console.log(birlesik);


var a = 20;
var b = 20;


//Günleri birbirine eşirleyen yapı. Hesaplamaya göre mesai saaleri hesaplanacak.
a==b ? console.log("eşit evet") : console.log("eşit değil hayır")

// Mevcut günü hesaplayan ve çalışma gününü hesaplan yapı.

var gun = 0

switch(gun){
	case 0:
	console.log("Pazartesi");
	break;

	case 3:
	console.log("Çarşamba");
}

document.write("gönder"+"<br>")


var dizi = new Array("personel","hi","t");

console.log(dizi)

//Haftanın günlerini hesaplayan yapı.

var i;

for (i=0; i<=10; i++) {
	
 document.writeln(i+"<br>")

}

var i;

// Çalışma günlerinin tekil veya çift olduğunu hesaplayan yapı.

for (i=1; i<=6; i++) {
	document.writeln("<h"+i+">çalışma günü</h"+i+">")
}

var i;

	for (i=0; i<=10; i++) {
		
	if (i%2==0) {

document.writeln(i+"<br>"+"Çalışma Günü Tektir")

} else {

	document.writeln(i+"<br>"+"Çalışma Günü Çifttir")
}


}



function topla(say1,say2) {
	

	document.writeln(say1+say2);
}

topla(60,40);



//function yashesapla(dogyil){

	//document.writeln(getdate-dogyil)
//}

//yashesapla(1995)




var islem1= function(yap1){

	yap1(30+20)
}

var islem2= function(yap2){

	document.writeln(10+yap2)
}

islem1(islem2)



var i =0;

function tekrarla(param) {
	if (i<param) {

		i++;

		document.write(i+i)
		tekrarla(param)
	}
}

tekrarla(5);



var  s = "Saati Geçemezseniz Hata Verecektir.";

document.write(s.lenght);





var tarih2 = new Date();


document.writeln(tarih2.getMinutes())

tarih2.setMinutes(2)


document.write(tarih2.getMinutes());



*/