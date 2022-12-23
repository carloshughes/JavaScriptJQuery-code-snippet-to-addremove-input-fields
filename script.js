/*window.addEventListener('load', function() {
	setTimeout(myFunction, 4650);
	document.getElementById("telefono_10").style.visibility = "hidden";
	
});

function myFunction() {
  
  

}
*/
let count = 1;
document.getElementById("telefono_2").style.display = "none";
document.getElementById("telefono_3").style.display = "none";
document.getElementById("telefono_4").style.display = "none";
document.getElementById("telefono_5").style.display = "none";
document.getElementById("telefono_6").style.display = "none";
document.getElementById("telefono_7").style.display = "none";
document.getElementById("telefono_8").style.display = "none";
document.getElementById("telefono_9").style.display = "none";
document.getElementById("telefono_10").style.display = "none";
		
$(".translate").click(function() {
  var lang = $(this).attr("id");
	if (lang == "add") {
	count++;
		if (count > 10){
			count = 10;
		}
	}
	if (lang == "remove"){
	count--;
		if(count < 1){
			count = 1;
		}
	}
	
	if (count == 1){
		document.getElementById("telefono_2").style.display = "none";
		document.getElementById("telefono_3").style.display = "none";
		document.getElementById("telefono_4").style.display = "none";
		document.getElementById("telefono_5").style.display = "none";
		document.getElementById("telefono_6").style.display = "none";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}
	
	if (count == 2){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "none";
		document.getElementById("telefono_4").style.display = "none";
		document.getElementById("telefono_5").style.display = "none";
		document.getElementById("telefono_6").style.display = "none";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";

		
	}
	
	if (count == 3){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "none";
		document.getElementById("telefono_5").style.display = "none";
		document.getElementById("telefono_6").style.display = "none";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}
	
	if (count == 4){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "none";
		document.getElementById("telefono_6").style.display = "none";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}

	if (count == 5){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "none";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}	
	if (count == 6){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "block";
		document.getElementById("telefono_7").style.display = "none";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}	
	if (count == 7){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "block";
		document.getElementById("telefono_7").style.display = "block";
		document.getElementById("telefono_8").style.display = "none";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}	
	if (count == 8){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "block";
		document.getElementById("telefono_7").style.display = "block";
		document.getElementById("telefono_8").style.display = "block";
		document.getElementById("telefono_9").style.display = "none";
		document.getElementById("telefono_10").style.display = "none";
	}	
	if (count == 9){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "block";
		document.getElementById("telefono_7").style.display = "block";
		document.getElementById("telefono_8").style.display = "block";
		document.getElementById("telefono_9").style.display = "block";
		document.getElementById("telefono_10").style.display = "none";
	}	
	if (count == 10){
		document.getElementById("telefono_2").style.display = "block";
		document.getElementById("telefono_3").style.display = "block";
		document.getElementById("telefono_4").style.display = "block";
		document.getElementById("telefono_5").style.display = "block";
		document.getElementById("telefono_6").style.display = "block";
		document.getElementById("telefono_7").style.display = "block";
		document.getElementById("telefono_8").style.display = "block";
		document.getElementById("telefono_9").style.display = "block";
		document.getElementById("telefono_10").style.display = "block";
	}	
	console.log(count); 
});

/*
function myFunction() {
document.getElementById("telefono_10").style.display = "none";
}*/


/*Explication of the visible, hidden/none, block/
/*https://cybmeta.com/display-none-vs-visibility-hidden-y-tu-como-escondes-las-cosas */
  

