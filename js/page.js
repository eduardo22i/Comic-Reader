var actPg = 0;

function init(x) {
	
	actComic = x;
	getPages();
	getPagesMaps(actComic);
	
}

function cambiar() {

	
	var pag = document.getElementById("pag");
	pag.src = "images/pag "+ (1+ (actPg%pages))  +".jpg";
	
	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps ( (1+ (actPg%pages)),  actComic );
	
	actPg++;
}

function playSound(x) {
	var pagaudioPlayer= document.getElementById("audioPlayer");
	
	audioPlayer.src = "sounds/cuadro " + x + ".mp3";
	
	audioPlayer.play();
	
}