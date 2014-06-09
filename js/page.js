var actPg = 0;

function init() {
	actComic = parseInt (getURLParameter('comicId') );
	actPg = parseInt (getURLParameter('pageId') );
	
	getPages();
	getPagesMaps(actComic);
	
	
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


function getAllPagesView() {
	
	var pag = document.getElementById("pagesHolder");
	
	pag.innerHTML  = '<a href="page.html?comicId='+i+'" class="pages"><img src="images/comic'+actComic+'/portada.jpg" border="0" /></a>'
	
	for (var i = 1; i <= pages ;i ++) {
		pag.innerHTML = pag.innerHTML+ '<a href="page.html?comicId='+actComic+'&pageId='+ i + '" class="pages"><img src="images/comic'+actComic+'/pag '+i+'.jpg" border="0" /></a>'; 	
	}
	
	pag.innerHTML = pag.innerHTML+ '<div class="clear"></div>';
}



function cambiar() {

	
	var pag = document.getElementById("pag");
	pag.src = "images/comic"+actComic+"/pag "+ (1+ (actPg%pages))  +".jpg";
	
	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps ( (1+ (actPg%pages)),  actComic );
	
	
	var stateObj = { foo: "bar" };
	history.pushState(stateObj, "Page", "page.html?comicId=" + actComic +"&pageId=" + (1+ (actPg%pages)) );
	
	actPg++;
	
}

function playSound(x) {
	var pagaudioPlayer= document.getElementById("audioPlayer");
	
	audioPlayer.src = "sounds/comic"+actComic+"/cuadro " + x + ".mp3";
	
	audioPlayer.play();
	
}