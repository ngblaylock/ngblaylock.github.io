function func(){
	document.getElementById("myBtn").value = "Something else";
	/*This is for the timer*/
	var snd = new Audio("buzzer.mp3"); // buffers automatically when created
	snd.play();
}

      function isNumberKey(evt){
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }

//_______________________________________________________________________________
/* STATS Home */

var makeH1 = 0;
var totalH1 = 0;
var makeH2 = 0;
var totalH2 = 0;
var makeH3 = 0;
var totalH3 = 0;


function homeStat1(point, n){
	if(point){
		switch(n) {
			case 1:
				makeH1 += 1;
				totalH1 += 1;
				break;
			case 2:
				makeH2 += 1;
				totalH2 += 1;				
				break;
			case 3:
				makeH3 += 1;
				totalH3 += 1;				
				break;
			default:
				alert("didn't get it");
		}
	}
	else{
		switch(n) {
			case 1:
				totalH1 += 1;
				break;
			case 2:
				totalH2 += 1;
				break;
			case 3:
				totalH3 += 1;
				break;
			default:
				alert("didn't get it");
		}
	}
	
	var h1 = ((makeH1/totalH1) * 100)
		if(makeH1 == 0 && totalH1 == 0){
			h1 = 100;
		}
	var h2 = ((makeH2/totalH2) * 100)
		if(makeH2 == 0 && totalH2 == 0){
				h2 = 100;
			}
	var h3 = ((makeH3/totalH3) * 100)
		if(makeH3 == 0 && totalH3 == 0){
				h3 = 100;
			}

	var boardH1 = document.getElementById("h1");
	boardH1.innerHTML = (makeH1 + "/" + totalH1 + " " + (h1.toFixed(2) +"%"));
	var boardH2 = document.getElementById("h2");
	boardH2.innerHTML = (makeH2 + "/" + totalH2 + " " + (h2.toFixed(2) +"%"));
	var boardH3 = document.getElementById("h3");
	boardH3.innerHTML = (makeH3 + "/" + totalH3 + " " + (h3.toFixed(2) +"%"));
	
	statColor(h1) ? boardH1.style.color = "red" : boardH1.style.color = "#2d2d2d";
	statColor(h2) ? boardH2.style.color = "red" : boardH2.style.color = "#2d2d2d";
	statColor(h3) ? boardH3.style.color = "red" : boardH3.style.color = "#2d2d2d";
	
	//console.log("1— " + makeH1 + "/" + totalH1 + " " + (h1.toFixed(2) +"%"));
	//console.log("2— " + makeH2 + "/" + totalH2 + " " + (h2.toFixed(2) +"%"));
	//console.log("3— " + makeH3 + "/" + totalH3 + " " + (h3.toFixed(2) +"%"));
	//console.log("");
}

//_______________________________________________________________________________
function home(n){
	var hs = parseInt(document.getElementById("homeScore").innerHTML);
	
	document.getElementById("homeScore").innerHTML = hs + n;
	
	switch(n) {
		case 1:
			homeStat1(true, 1);
			break;
		case 2:
			homeStat1(true, 2);
			break;
		case 3:
			homeStat1(true, 3);
			break;
		default:
			alert("didn't get it");
	}
	
}
//_______________________________________________________________________________
/* STATS Visitor */

var makeV1 = 0;
var totalV1 = 0;
var makeV2 = 0;
var totalV2 = 0;
var makeV3 = 0;
var totalV3 = 0;

function statColor(s){
	if(s < 20){
		return true;
	}
	else{
		return false;
	}
}

function visitStat1(point, n){
	if(point){
		switch(n) {
			case 1:
				makeV1 += 1;
				totalV1 += 1;
				break;
			case 2:
				makeV2 += 1;
				totalV2 += 1;				
				break;
			case 3:
				makeV3 += 1;
				totalV3 += 1;				
				break;
			default:
				alert("didn't get it");
		}
	}
	else{
		switch(n) {
			case 1:
				totalV1 += 1;
				break;
			case 2:
				totalV2 += 1;
				break;
			case 3:
				totalV3 += 1;
				break;
			default:
				alert("didn't get it");
		}
	}
	
	var v1 = ((makeV1/totalV1) * 100)
		if(makeV1 == 0 && totalV1 == 0){
			v1 = 100;
		}
	var v2 = ((makeV2/totalV2) * 100)
		if(makeV2 == 0 && totalV2 == 0){
				v2 = 100;
			}
	var v3 = ((makeV3/totalV3) * 100)
		if(makeV3 == 0 && totalV3 == 0){
				v3 = 100;
			}
			
	var boardv1 = document.getElementById("v1");
	boardv1.innerHTML = (makeV1 + "/" + totalV1 + " " + (v1.toFixed(2) +"%"));
	var boardv2 = document.getElementById("v2");
	boardv2.innerHTML = (makeV2 + "/" + totalV2 + " " + (v2.toFixed(2) +"%"));
	var boardv3 = document.getElementById("v3");
	boardv3.innerHTML = (makeV3 + "/" + totalV3 + " " + (v3.toFixed(2) +"%"));
	
	statColor(v1) ? boardv1.style.color = "red" : boardv1.style.color = "#2d2d2d";
	statColor(v2) ? boardv2.style.color = "red" : boardv2.style.color = "#2d2d2d";
	statColor(v3) ? boardv3.style.color = "red" : boardv3.style.color = "#2d2d2d";
	
	
	//console.log("1— " + makeV1 + "/" + totalV1 + " " + (v1.toFixed(2) +"%"));
	//console.log("2— " + makeV2 + "/" + totalV2 + " " + (v2.toFixed(2) +"%"));
	//console.log("3— " + makeV3 + "/" + totalV3 + " " + (v3.toFixed(2) +"%"));
	//console.log("");
}

//_______________________________________________________________________________
function visit(n){
	var vs = parseInt(document.getElementById("visitorScore").innerHTML);
	
	document.getElementById("visitorScore").innerHTML = vs + n;
	
	switch(n) {
		case 1:
			visitStat1(true, 1);
			break;
		case 2:
			visitStat1(true, 2);
			break;
		case 3:
			visitStat1(true, 3);
			break;
		default:
			alert("didn't get it");
	}
	
}

//_______________________________________________________________________________
// NEW GAME

function newGame(){

	makeV1 = 0;
	totalV1 = 0;
	makeV2 = 0;
	totalV2 = 0;
	makeV3 = 0;
	totalV3 = 0;
	makeH1 = 0;
	totalH1 = 0;
	makeH2 = 0;
	totalH2 = 0;
	makeH3 = 0;
	totalH3 = 0;
	mins = document.getElementById("setMinutes").value;
	secs = document.getElementById("setSeconds").value;

	if(mins == ""){
		mins = 20;
	}
	if(secs == ""){
		secs = 0;
	}

		$("#minutes").text(mins);

		$("#seconds").text(("0" + secs).slice(-2));

	if (secs <= 0 && mins != 0) {
		secs = 60;
	}
	
	document.getElementById("visitorScore").innerHTML = 0;
	document.getElementById("homeScore").innerHTML = 0;
	
	var boardv1 = document.getElementById("v1");
	boardv1.innerHTML = ("N/A");
	boardv1.style.color = "#2d2d2d";
	var boardv2 = document.getElementById("v2");
	boardv2.innerHTML = ("N/A");
	boardv2.style.color = "#2d2d2d";
	var boardv3 = document.getElementById("v3");
	boardv3.innerHTML = ("N/A");
	boardv3.style.color = "#2d2d2d";
	
	var boardH1 = document.getElementById("h1");
	boardH1.innerHTML = ("N/A");
	boardH1.style.color = "#2d2d2d";
	var boardH2 = document.getElementById("h2");
	boardH2.innerHTML = ("N/A");
	boardH2.style.color = "#2d2d2d";
	var boardH3 = document.getElementById("h3");
	boardH3.innerHTML = ("N/A");
	boardH3.style.color = "#2d2d2d";
	
	var hName = document.getElementById("homeName").value;
	var vName = document.getElementById("visitorName").value;
	
	if(hName == ""){
		document.getElementById("HSB").innerHTML = "home";
	}
	else{
		document.getElementById("HSB").innerHTML = hName;
	}
	
	if(vName == ""){
		document.getElementById("VSB").innerHTML = "visitor";
	}
	else{
		document.getElementById("VSB").innerHTML = vName;
	}
	
}

//_______________________________________________________________________________
// CLOCK
var secs = 0;
var mins = 20;
var per = 4;

$( document ).ready(function() {
    if(mins <10){
		$("#minutes").text("0" + mins);
	}
	else{
		$("#minutes").text(mins);
	}
    if(secs <10){
		$("#seconds").text("0" + secs);
	}
	else{
		$("#seconds").text(secs);
	}
	if (secs <= 0 && mins != 0) {
		secs = 60;
	}
});

function newPeriod(){

}

$("#buttonBorder").click(function () {
	$(this).toggleClass('red green')
	$(this).toggleClass('stop go')
	
		var interval = setInterval(function() {
			if ($("#buttonBorder").hasClass("go")) {
				secs--;
				//change seconds
				if(secs > -1){
					if(secs <10){
						$("#seconds").text("0" + secs);
					}
					else{
						$("#seconds").text(secs);
					}
					//change minutes
					if (secs <= 0 && mins <= 0) {
						clearInterval(interval);
						$("#buttonBorder").attr("class","red");
						per--;
						newPeriod();
					}
					if (secs <= 0 && mins != 0) {
						secs = 60;
					}
					if (secs == 59){
						mins--;
						    if(mins <10){
								$("#minutes").text("0" + mins);
							}
							else{
								$("#minutes").text(mins);
							}
					}
				}
			}
			if ($("#buttonBorder").hasClass("stop")) {
				clearInterval(interval);
			}
		}, 1000);

});


































