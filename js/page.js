var actPg = 0;

function init() {
	/*
	actComic = parseInt (getURLParameter('comicId') );
	actPg = parseInt (getURLParameter('pageId') );



	getPages();
	getPagesMaps(actComic);
	*/
}



function getAllPagesView() {

	var pag = document.getElementById("pagesHolder");

	pag.innerHTML = "";
	for (var i = 1; i <= getPages(); i ++) {
		pag.innerHTML = pag.innerHTML+ '<a href="page.html?comicId='+actComic+'&pageId='+ i + '" class="pages"><img src="images/'+getPageSrc(i)+'" border="0" /></a>';
		if (i==4) {
			pag.innerHTML = pag.innerHTML+ '<div class="clear"></div>';
		}
	}

	pag.innerHTML = pag.innerHTML+ '<div class="clear"></div>';
}



function cambiar() {

	actPg++;

	var pag = document.getElementById("pag");
	pag.src = "images/"+getPageSrc(   (actPg %pages) );



	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps (  (actPg%pages) ,  actComic );


	var stateObj = { foo: "bar" };
	history.pushState(stateObj, "Page", "page.html?comicId=" + actComic +"&pageId=" +  (actPg%pages)  );



}

function playSound(x) {
	var pagaudioPlayer= document.getElementById("audioPlayer");

	audioPlayer.src = "sounds/comic"+actComic+"/cuadro " + x + ".mp3";

	audioPlayer.play();

}
