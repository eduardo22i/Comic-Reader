var actPg = 0;

function init() {

	var pag = document.getElementById("comicsHolder");



	for (var i = 1; i <= getNumberOfComics();i ++) {
		pag.innerHTML = pag.innerHTML+ '<a href="pages.html?comicId='+i+'" class="comic"><img src="images/'+getPageSrc(1)+'" border="0" /></a>';
	}

	pag.innerHTML = pag.innerHTML+ '<div class="clear"></div>';
}
