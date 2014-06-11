var actual_JSON ;

var actComic  = 1;

var pages = 0;


function getNumberOfComics()  {
	return actual_JSON.comics.length;
	//return 1;
}

function getPages () {
	//loadJSON();

	if (actual_JSON) {
		pages =  actual_JSON.comics[0].comic[actComic-1].pages.length;
		return pages;
	} else {
		return 0;
	}
	//pages = actual_JSON.comics.comic[actComic-1].pages.length;

	/*
	switch (actComic) {
		case 1:
			pages = 3;
			break;
	}
	*/
}

function getPagesMaps (page) {

	var ret = "";
	if (actual_JSON) {
		ret = actual_JSON.comics[0].comic[0].pages[page-1].map;
	}
	return ret;


}


function getPageSrc (page) {

	var ret = "";
	if (actual_JSON) {
		ret = actual_JSON.comics[0].comic[0].pages[page-1].pagesrc;
	}
	return ret;

}


function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


function loadJSON() {

	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			//document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

			actual_JSON =  JSON.parse(xmlhttp.responseText);





			actComic = parseInt (getURLParameter('comicId') );
			actPg = parseInt (getURLParameter('pageId') );

			if (actComic && actPg) {
				init();
				getPages();
				//getAllPagesView();
				getAllPagesFullView();

				//var pag = document.getElementById("pag"+actPg);
				//pag.src = "images/"+ getPageSrc( (actPg%pages)) ;


				thisPage();
				
				var pagArea = document.getElementById("pagMap");
				pagArea.innerHTML = getPagesMaps (  (actPg) ,  actComic );
				
				
				var menuBtn = document.getElementById("menuBtn");
				menuBtn.href = "pages.html?comicId="+ actComic;

				//actPg--;
				//cambiar();
			} else if (actComic) {

				init();
				getPages();
				getAllPagesView();
			} else {
				init();
			}

		}
	}
	xmlhttp.open("GET","json/comics.json",true);
	xmlhttp.send();
}


loadJSON();
