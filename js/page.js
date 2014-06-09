var actPg = 0;

function init() {
	actComic = parseInt (getURLParameter('comicId') );
	
	
	
	getPages();
	getPagesMaps(actComic);
	
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function cambiar() {

	
	var pag = document.getElementById("pag");
	pag.src = "images/comic"+actComic+"/pag "+ (1+ (actPg%pages))  +".jpg";
	
	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps ( (1+ (actPg%pages)),  actComic );
	
	actPg++;
}

function playSound(x) {
	var pagaudioPlayer= document.getElementById("audioPlayer");
	
	audioPlayer.src = "sounds/comic"+actComic+"/cuadro " + x + ".mp3";
	
	audioPlayer.play();
	
}