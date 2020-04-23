"use strict";

function menuOpen(x) {
  var menu1 = document.getElementsByClassName("menu1");
  menu1[0].style.backgroundColor = "#55EE30";
  var menu2 = document.getElementsByClassName("menu2");
  menu2[0].style.backgroundColor = "#55EE30";
  var menu3 = document.getElementsByClassName("menu3");
  menu3[0].style.backgroundColor = "#55EE30";
  var menu = document.getElementById("menu");
  menu.style.backgroundColor = "red";
//  x.classList.toggle("open");
}
 
  var menuEvent = document.getElementById("contener");
  menuEvent.addEventListener("click", function() {
	  menuClose(this);
  });
  
  var menuEvent1 = document.getElementsByTagName("header");
  menuEvent1[0].addEventListener("click", function() {
	  menuClose(this);
  });
  

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






