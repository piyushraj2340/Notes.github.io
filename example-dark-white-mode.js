"use strict";


var count = (function () {
	var counter = 0;
	return function () {
     counter += 1;
     return counter;	 
	}
})();

function darkMode() {
    if(count()%2 == 0) {
	  whiteCode();
  	  whiteTagcolor();
	  whiteTagcolorname();
	  whiteAttributecolor();
	  whitehtmlText();
	  whitecssSelector();
	  whitecssBracket();
	  whitecssPropertycolor();
	  whitecssPropertyvaluecolor();
	  whiteAttributevaluecolor(); 
	  whiteJSkeywordcolor();
	  whiteJSstringcolor();
	  whiteJScolor();
	  whiteSQLkeywordcolor();
	  whiteSQLcolor();
	  whiteSQlstringcolor();
      whiteIconwhite();
	} 
	else {
	  darkCode();
	  darkTagcolor();
	  darkTagcolorname();
	  darkAttributecolor();
	  darkhtmlText();
	  darkcssSelector();
	  darkcssBracket();
	  darkcssPropertycolor();
	  darkcssPropertyvaluecolor();
	  darkAttributevaluecolor(); 
	  darkJSkeywordcolor();
	  darkJSstringcolor();
	  darkJScolor();
	  darkSQLkeywordcolor();
	  darkSQLcolor();
	  darkSQlstringcolor();
	  darkIcondark();
	}
    
}

// dark mode
	
function darkIcondark() {
	var iconDark = document.getElementById("dark-mode-button");
	iconDark.style.backgroundImage ="url('assets/image/icon-dark-button.png')";
	iconDark.onmouseover = function () {
		iconDark.style.backgroundImage ="url('assets/image/icon-white-button.png')";
	}
	iconDark.onmouseout = function () {
		iconDark.style.backgroundImage ="url('assets/image/icon-dark-button.png')";
	}
}	
	

function darkCode() {
	var i ,len;
	len = document.getElementsByClassName("code").length;
	for(i=0; i<len; i++) {
	  var darCode = document.getElementsByClassName("code");  
      darCode[i].style.backgroundColor = "#282C34";
	  var darCode = document.getElementsByClassName("code");  
      darCode[i].style.borderLeftColor = "#282C34";
	}
}

	function darkTagcolor() {
      var i ,len;
	  len = document.getElementsByClassName("tagcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("tagcolor");  
      tagName[i].style.color = "#88CCBB";
	}
}

function darkTagcolorname() {
      var i ,len;
	  len = document.getElementsByClassName("tagcolorname").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("tagcolorname");  
      tagName[i].style.color = "#FF9999";
	}
}

function darkAttributecolor() {
      var i ,len;
	  len = document.getElementsByClassName("attributecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("attributecolor");  
      tagName[i].style.color = "#C5A5C5";
	}
}

function darkhtmlText() {
      var i ,len;
	  len = document.getElementsByClassName("text").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("text");  
      tagName[i].style.color = "#FFF";
	}
}

function darkcssSelector() {
      var i ,len;
	  len = document.getElementsByClassName("cssselectorcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("cssselectorcolor");  
      tagName[i].style.color = "#FF9999";
	}
}

function darkcssBracket() {
      var i ,len;
	  len = document.getElementsByClassName("cssbracketcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("cssbracketcolor");  
      tagName[i].style.color = "#FFF";
	}
}

function darkcssPropertycolor() {
      var i ,len;
	  len = document.getElementsByClassName("csspropertycolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("csspropertycolor");  
      tagName[i].style.color = "#C5A5C5";
	}
}

function darkcssPropertyvaluecolor() {
      var i ,len;
	  len = document.getElementsByClassName("csspropertyvaluecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("csspropertyvaluecolor");  
      tagName[i].style.color = "#88C999";
	}
}

function darkAttributevaluecolor() {
      var i ,len;
	  len = document.getElementsByClassName("attributevaluecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("attributevaluecolor");  
      tagName[i].style.color = "#88C999";
	}
}

function darkJSkeywordcolor() {
      var i ,len;
	  len = document.getElementsByClassName("jskeywordcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jskeywordcolor");  
      tagName[i].style.color = "#C5A5C5";
	}
}

function darkJSstringcolor() {
      var i ,len;
	  len = document.getElementsByClassName("jsstringcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jsstringcolor");  
      tagName[i].style.color = "#88C999";
	}
}

function darkJScolor() {
      var i ,len;
	  len = document.getElementsByClassName("jscolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jscolor");  
      tagName[i].style.color = "#FFF";
	}
}

function darkSQLkeywordcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlkeywordcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlkeywordcolor");  
      tagName[i].style.color = "#80B6FF";
	}
}


function darkSQLcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlcolor");  
      tagName[i].style.color = "#FFF";
	}
}

function darkSQlstringcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlstringcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlstringcolor");  
      tagName[i].style.color = "#88C999";
	}
}



//    white Mode


function whiteIconwhite() {
	var iconWhite = document.getElementById("dark-mode-button");
	iconWhite.style.backgroundImage ="url('assets/image/icon-white-button.png')";
	iconWhite.onmouseover = function () {
		iconWhite.style.backgroundImage ="url('assets/image/icon-dark-button.png')";
	}
	iconWhite.onmouseout = function () {
		iconWhite.style.backgroundImage ="url('assets/image/icon-white-button.png')";
	}
	
	
}

function whiteCode() {
	var i ,len;
	len = document.getElementsByClassName("code").length;
	for(i=0; i<len; i++) {
	  var darCode = document.getElementsByClassName("code");  
      darCode[i].style.backgroundColor = "#FFF";
	  var darCode = document.getElementsByClassName("code");  
      darCode[i].style.borderLeftColor = "#4CAF50";
	}
}

	function whiteTagcolor() {
      var i ,len;
	  len = document.getElementsByClassName("tagcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("tagcolor");  
      tagName[i].style.color = "mediumblue";
	}
}

function whiteTagcolorname() {
      var i ,len;
	  len = document.getElementsByClassName("tagcolorname").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("tagcolorname");  
      tagName[i].style.color = "brown";
	}
}

function whiteAttributecolor() {
      var i ,len;
	  len = document.getElementsByClassName("attributecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("attributecolor");  
      tagName[i].style.color = "red";
	}
}

function whitehtmlText() {
      var i ,len;
	  len = document.getElementsByClassName("text").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("text");  
      tagName[i].style.color = "#000";
	}
}

function whitecssSelector() {
      var i ,len;
	  len = document.getElementsByClassName("cssselectorcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("cssselectorcolor");  
      tagName[i].style.color = "brown";
	}
}

function whitecssBracket() {
      var i ,len;
	  len = document.getElementsByClassName("cssbracketcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("cssbracketcolor");  
      tagName[i].style.color = "#000";
	}
}

function whitecssPropertycolor() {
      var i ,len;
	  len = document.getElementsByClassName("csspropertycolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("csspropertycolor");  
      tagName[i].style.color = "red";
	}
}

function whitecssPropertyvaluecolor() {
      var i ,len;
	  len = document.getElementsByClassName("csspropertyvaluecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("csspropertyvaluecolor");  
      tagName[i].style.color = "mediumblue";
	}
}

function whiteAttributevaluecolor() {
      var i ,len;
	  len = document.getElementsByClassName("attributevaluecolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("attributevaluecolor");  
      tagName[i].style.color = "mediumblue";
	}
}

function whiteJSkeywordcolor() {
      var i ,len;
	  len = document.getElementsByClassName("jskeywordcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jskeywordcolor");  
      tagName[i].style.color = "mediumblue";
	}
}

function whiteJSstringcolor() {
      var i ,len;
	  len = document.getElementsByClassName("jsstringcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jsstringcolor");  
      tagName[i].style.color = "brown";
	}
}

function whiteJScolor() {
      var i ,len;
	  len = document.getElementsByClassName("jscolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("jscolor");  
      tagName[i].style.color = "#000";
	}
}

function whiteSQLkeywordcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlkeywordcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlkeywordcolor");  
      tagName[i].style.color = "mediumblue";
	}
}


function whiteSQLcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlcolor");  
      tagName[i].style.color = "#000";
	}
}

function whiteSQlstringcolor() {
      var i ,len;
	  len = document.getElementsByClassName("sqlstringcolor").length;
	  for(i=0; i<len; i++) {
	  var tagName = document.getElementsByClassName("sqlstringcolor");  
      tagName[i].style.color = "brown";
	}
}







