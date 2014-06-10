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


	/*
	switch (actComic) {
		case 1:
			switch (page) {
			case 1:
				return 	'<area shape="rect" coords="57,67,934,974" href="javascript:playSound(1)"> <area shape="rect" coords="58,995,409,1244" href="javascript:playSound(2)"> <area shape="rect" coords="440,995,929,1247" href="javascript:playSound(3)">';
				break;
			case 2:
			return '<area shape="rect" coords="65,47,422,420" href="javascript:playSound(4)"> <area shape="rect" coords="445,46,959,420" href="javascript:playSound(5)"><area shape="rect" coords="65,444,296,829" href="javascript:playSound(6)">    <area shape="rect" coords="315,444,603,829" href="javascript:playSound(7)">    <area shape="rect" coords="620,443,958,832" href="javascript:playSound(8)">    <area shape="rect" coords="65,849,452,1197" href="javascript:playSound(9)">    <area shape="rect" coords="498,849,958,1198" href="javascript:playSound(10)">';
			break;
			case 3:
			return '<area shape="rect" coords="52,35,628,435" href="javascript:playSound(11)">    <area shape="rect" coords="643,31,965,438" href="javascript:playSound(12)">    <area shape="rect" coords="44,456,496,766" href="javascript:playSound(13)">    <area shape="rect" coords="514,458,963,764" href="javascript:playSound(14)">    <area shape="rect" coords="46,795,385,1242" href="javascript:playSound(15)">    <area shape="rect" coords="415,795,945,952" href="javascript:playSound(16)">    <area shape="rect" coords="415,977,946,1241" href="javascript:playSound(17)">';
			break;
			default:
				return "";
			break;
		break;
	}
	}
	*/

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

				actPg--;
				cambiar();
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
