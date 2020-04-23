"use strict";

    // menu Open Function
	 var count = (function () {
	   var counter = 0;
 	   return function () {
		   counter += 1;
		   return counter;
	   }
   
   })();
function menuOpen() {
   var elemMenu = document.getElementById("menu");
   elemMenu.classList.toggle("open");
	if(count()%2 == 0) {
	  var elemAside = document.getElementsByTagName("aside");
	  elemAside[0].style.display = "none";
	  return count();
   }
    else {
	  var elemAside = document.getElementsByTagName("aside");
	  elemAside[0].style.display = "block";
	  return count();
	  }
}

 
 
 
  // close menu Event
 
  var menuEvent = document.getElementById("menu");
  menuEvent.addEventListener("click" , menuOpen);
  menuEvent.addEventListener("click" , count);
 /* 
  var menuEvent1 = document.getElementsByTagName("header");
  menuEvent1[0].addEventListener("click", function() {
	  menuClose(this);
  });
  
   // close menu function

function menuClose(x) {
  var menu1 = document.getElementsByClassName("menu1");
  menu1[0].style.backgroundColor = "#000"; 
  var menu2 = document.getElementsByClassName("menu2");
  menu2[0].style.backgroundColor = "#000"; 
  var menu3 = document.getElementsByClassName("menu3");
  menu3[0].style.backgroundColor = "#000";
  var menu = document.getElementById("menu");
  menu.style.backgroundColor = "transparent";
  x.classList.toggle("open");
}


  // height of aside 
  
  /* (function()  {
      var elem = document.getElementsByTagName("aside");
	  var 
	  elem[0].style.height =  + "px";
  })(); */



