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


function getAllPagesFullView() {

	var pag = document.getElementById("movimiento");

	pag.innerHTML = "";
	for (var i = 1; i <= getPages(); i ++) {
		pag.innerHTML = pag.innerHTML+ '<li id="slide'+i+'">	<img src="images/'+getPageSrc(i)+'" usemap="#pagMap" id="pag'+i+'" />	</li>';

	}

}

function thisPage()

{

	var radios = document.getElementsByName("controls");

	for(var j = 0; j < radios.length; j++)

	{

			if((actPg-1) == radios[j].value)

			{

				radios[j].checked = true;

				break;

			}

  }

}

function cambiar() {

	actPg++;

	var pagArea = document.getElementById("pagMap");
	pagArea.innerHTML = getPagesMaps (  (actPg) ,  actComic );


	var stateObj = { foo: "bar" };
	history.pushState(stateObj, "Page", "page.html?comicId=" + actComic +"&pageId=" +  (actPg)  );


}


window.onload = function () {
	if (typeof history.pushState === "function")   {
		//var stateObj = { foo: "bar" };
		//history.pushState(stateObj, null, null);
		window.onpopstate = function () {
			actPg =  parseInt (getURLParameter('pageId') ) ;

			//actPg--;

			thisPage();

			var pagArea = document.getElementById("pagMap");
			pagArea.innerHTML = getPagesMaps (  (actPg) ,  actComic );

		};
	}
}


function playSound(x) {
	var pagaudioPlayer= document.getElementById("audioPlayer");

	audioPlayer.src = "sounds/comic"+actComic+"/cuadro " + x + ".mp3";

	audioPlayer.play();

}
