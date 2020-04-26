"use strict";
// counter function 
var count = (function () {
var counter = 0;
  return function () {
  counter += 1;
  return counter;
}
})();
 
// resize window function 
var reSize = (function () {
  return function () {
  var y = 0;
  y < 153;
  y += document.documentElement.scrollTop;
	
  

  if(window.innerWidth < 990) {  // width condition
   
   menuClose();
  
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.display =  "none";
  if(document.body.scrollTop >= 83 || document.documentElement.scrollTop >= 83) {    // scrollTop condition
		  
  var count1 = window.innerHeight - 70;
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
}
	  
  else {
  var count1 = window.innerHeight - (153 - y);
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
}
}

else if(window.innerWidth > 990 || window.innerWidth ) {

  var y = 0;
  y < 153;
  y += document.documentElement.scrollTop;
	
  if(document.body.scrollTop >= 83 || document.documentElement.scrollTop >= 83) {    // scrollTop condition
  var count1 = window.innerHeight - 60;
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
  elem[0].style.display = "block";
  elem[0].style.position = "sticky";
  elem[0].style.top = "55px";
}
	  
  else {
  var count1 = window.innerHeight - (143 - y);
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
  elem[0].style.display = "block";
  elem[0].style.position = "sticky";
  elem[0].style.top = "55px";
}
	
}
   
  else {
   // nothing
}
	
  return y;

}
})();
  
  
// scroll window function
var scRoll = (function() {
  return function () {
		 
  if(window.innerWidth < 990) { // Width Condition
		  
  if(document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {  // scrollTop condition
		  
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

else if(window.innerWidth > 990 || window.innerWidth) {
	
  var y = 0;
  y < 153;
  y += document.documentElement.scrollTop;  
  
  if(document.body.scrollTop >= 83 || document.documentElement.scrollTop >= 83) {    // scrollTop condition
		  
  var count1 = window.innerHeight - 60;
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
  
}
	  
  else {
  var count1 = window.innerHeight - (143 - y);
  var elem =  document.getElementsByTagName("aside");
  elem[0].style.height = count1 + "px";
}
}
	 
  else{
   // nothing
} 
}
})();
   
// menu open function

function menuOpen() {
	  
  if(window.innerWidth < 990) {  // width condition
		
  var elemMenu = document.getElementById("menu");
  elemMenu.style.backgroundColor = "transparent";
	
  if(count()%2 == 0) { // count function for menu open and close
	 
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
  var y = 0;
  y < 153;
  y += document.documentElement.scrollTop;
	   
  if(document.body.scrollTop > 83 || document.documentElement.scrollTop > 83){ //scrollTop condition 
	   
  elemAside[0].style.display = "block";
  elemAside[0].style.height = window.innerHeight - 70  + "px"
}
	  
  else{
	  
  elemAside[0].style.display = "block";
  elemAside[0].style.height = window.innerHeight - (153 - y)  + "px"
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
   //nothing
} 
}
  
// menu close function

function menuClose() {
	  
  if(window.innerWidth < 990) { //width condition for menu close
	  
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
  return count();
}
  
  else {
   // nothing 
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
 
 