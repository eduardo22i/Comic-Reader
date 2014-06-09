var actComic  = 1;

var pages = 0;

function getNumberOfComics()  {
	return 1;
}

function getPages () {
	switch (actComic) {
		case 1:
			pages = 3;
			break;
	}

}

function getPagesMaps (page, actComic) {

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


}
