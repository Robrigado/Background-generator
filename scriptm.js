var cor1 = document.querySelector(".cor1");
var cor2 = document.querySelector(".cor2");
var hp = document.getElementById("hexpicker");
var corpo = document.querySelector("body");
var css = document.getElementById("h31");
var hexpicker = document.getElementById("h32");
var hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
var meuHex = "#";
var randomize = document.getElementById("randomize-hex");


corpo.style.background = "linear-gradient(to right, " + cor1.value + ", " + cor2.value + ")";
css.textContent = corpo.style.background;
hexpicker.textContent = hp.value;

function mudarcor() {
	corpo.style.background = "linear-gradient(to right, " + cor1.value + ", " + cor2.value + ")";
	css.textContent = corpo.style.background;

}

function mudarcor2() {
	hexpicker.textContent = hp.value;
}


function gerarHex(){
	for(i=0; i<6; i++) {
		var rng = hex[Math.floor(Math.random()*16)];
		meuHex = meuHex + rng;

	}
	hp.value = meuHex;
	hexpicker.textContent = hp.value;
	meuHex = "#";
}


cor1.addEventListener("input", mudarcor);
cor2.addEventListener("input", mudarcor);
hp.addEventListener("input", mudarcor2);
randomize.addEventListener("click", gerarHex);



