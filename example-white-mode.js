

function whiteMode() {
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


function whiteIconwhite() {
	var iconDark = document.getElementById("white-mode-button");
	iconDark.style.display = "none";
	
	var iconWhite = document.getElementById("dark-mode-button");
	iconWhite.style.display = "inline-block"; 
	
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






