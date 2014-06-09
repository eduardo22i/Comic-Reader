var actPg = 1;

function cambiar() {

	actPg++;
	var pag = document.getElementById("pag");
	pag.src = "images/pag "+ (1+ (actPg%3))  +".jpg";
}
