let whatsApp = function(number) {
	let whatsappLink = document.querySelectorAll('.form-main__w');
	for (let i = 0; whatsappLink.length > i; i++) {
		whatsappLink[i].href = 'https://wa.me/' + number;
	}
};

let viber = function(number) {
	let viberLink = document.querySelectorAll('.form-main__v');
	for (let i = 0; viberLink.length > i; i++) {
		viberLink[i].href = 'viber://chat?number=' + '+' + number;
	}

	let mobileLink = document.querySelectorAll('.mobile');
	for (let i = 0; mobileLink.length > i; i++) {
		mobileLink[i].href = 'viber://chat?number=' + number;
	}
};

let phoneNumber = function(number) {
	let phoneClass = document.querySelectorAll('.phone');
	for (let i = 0; phoneClass.length > i; i++) {
		phoneClass[i].innerText = '8 (' + number[1] + number[2] + number[3] + ')' + ' ' + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + '-' + number[9] + number[10];
		phoneClass[i].href = 'tel:+' + number;
	}

};

let contactAdress = function(adress) {
	let contactAdressF = document.getElementById('contactAdress');
	contactAdressF.innerHTML = adress;
}

/* ------------------ */


whatsApp('79216350068');
viber('79216350068');
phoneNumber('78129800154');
contactAdress('г. Санкт-Петербург<br>Большая Пушкарская ул., 4');