"use strict";
   // counter function 
  var count = (function () {
   var counter = 0;
   return function () {
   counter += 1;
   return counter;
 }
 })();
 
 
  var reSize = (function () {
	 return function () {
		var y = 0;
		y < 153;
		y += document.documentElement.scrollTop;
	if(window.innerWidth < 990) {
		
	  if(document.body.scrollTop >= 83 || document.documentElement.scrollTop >= 83) {
		  //nothing
	  }
	  
	  else {
    var count1 = window.innerHeight - (147 - y);
	var elem =  document.getElementsByTagName("aside");
	elem[0].style.height = count1 + "px";
	  }
	 }
    else {
		// nothing
	}
	return y;
	 }
  })();
  
  var scRoll = (function() {
     return function () {
	  if(window.innerWidth < 990) {
	  if(document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {
		  var elem = document.getElementsByTagName("aside");
		  elem[0].style.position = "fixed";
		  elem[0].style.top = "50px";
		  reSize();
	  }
	 
	  
	  else {
		  var elem = document.getElementsByTagName("aside");
		  elem[0].style.position = "absolute";
		  elem[0].style.top = "134px";
		 reSize();
	  }
	 }
	 else{
		 // window.innerWidth
	 } 
	 }
  })();
   
  // menu function
  function menuOpen() {
	  if(window.innerWidth < 990) {
    var elemMenu = document.getElementById("menu");
    elemMenu.style.backgroundColor = "transparent";
     if(count()%2 == 0) {
      var elemAside = document.getElementsByTagName("aside");
      elemAside[0].style.display = "none";
	  var elemMenu1 = document.getElementsByClassName("menu1");
      elemMenu1[0].style.backgroundColor = "#000"; 
      var elemMenu2 = document.getElementsByClassName("menu2");
      elemMenu2[0].style.backgroundColor = "#000"; 
      var elemMenu3 = document.getElementsByClassName("menu3");
      elemMenu3[0].style.backgroundColor = "#000";
      var elemMenu1 = document.getElementById("menu0");
	  elemMenu1.style.backgroundColor = "transparent";
      return count();
 }
     else {
      var elemAside = document.getElementsByTagName("aside");
	  if(document.body.scrollTop > 83 || document.documentElement.scrollTop > 83){
	  elemAside[0].style.display = "block";
      elemAside[0].style.height = window.innerHeight-70 + "px"
	  }
	  else{
		  elemAside[0].style.display = "block";
      elemAside[0].style.height = window.innerHeight - (153 - document.documentElement.scrollTOp) + "px"
	  }
      
	  var elemMenu1 = document.getElementsByClassName("menu1");
      elemMenu1[0].style.backgroundColor = "#55EE30"; 
      var elemMenu2 = document.getElementsByClassName("menu2");
      elemMenu2[0].style.backgroundColor = "#55EE30"; 
      var elemMenu3 = document.getElementsByClassName("menu3");
      elemMenu3[0].style.backgroundColor = "#55EE30";
      var elemMenu1 = document.getElementById("menu0");
	  elemMenu1.style.backgroundColor = "red";
      return count();
	  }}
	 else {
	 } 
  }
  
  function menuClose() {
  if(window.innerWidth < 990) {
	  var elemMenu1 = document.getElementsByClassName("menu1");
  elemMenu1[0].style.backgroundColor = "#000"; 
  var elemMenu2 = document.getElementsByClassName("menu2");
  elemMenu2[0].style.backgroundColor = "#000"; 
  var elemMenu3 = document.getElementsByClassName("menu3");
  elemMenu3[0].style.backgroundColor = "#000";
  var elemMenu = document.getElementById("menu0");
  elemMenu.style.backgroundColor = "transparent";
  var elemAside = document.getElementsByTagName("aside");
  elemAside[0].style.display = "none";
  }
  else {
  }
  
}


  // addEventListener 
  
  var menuEvent = document.getElementById("menu");
  menuEvent.addEventListener("click" , menuOpen);
  menuEvent.addEventListener("click" , count);
  
  var menuEvent1 = document.getElementById("contener");
  menuEvent1.addEventListener("click" , menuClose);
 
  window.addEventListener("resize", reSize);
  window.addEventListener("scroll", scRoll);
 
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



