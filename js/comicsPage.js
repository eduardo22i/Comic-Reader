var actPg = 0;

function init() {
	
	var pag = document.getElementById("comicsHolder");
	
	
	
	for (var i = 1; i <= getNumberOfComics();i ++) {
		pag.innerHTML = pag.innerHTML+ '<a href="pages.html?comicId='+i+'" class="comic"><img src="images/comic'+i+'/portada.jpg" border="0" /></a>'; 	
	}
	
	pag.innerHTML = pag.innerHTML+ '<div class="clear"></div>';
}

function cambiar() {

	
	var pag = document.getElementById("pag");
	pag.src = "images/pag "+ (1+ (actPg%pages))  +".jpg";
	
	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps ( (1+ (actPg%pages)),  actComic );
	
	actPg++;
}