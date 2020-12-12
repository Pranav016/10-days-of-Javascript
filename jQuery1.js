// jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

// jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

// 1.The element Selector
$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });

//2. The #id selector
$(document).ready(function(){
    $("button").click(function(){
      $("#test").hide();
    });
  });

//3. The .class selector
$(document).ready(function(){
    $("button").click(function(){
      $(".test").hide();
    });
  });


$("*")	//Selects all elements	
$(this)	//Selects the current HTML element	
$("p.intro")	//Selects all <p> elements with class="intro"	
$("p:first")	//Selects the first <p> element	
$("ul li:first")	//Selects the first <li> element of the first <ul>	
$("ul li:first-child")	//Selects the first <li> element of every <ul>	
$("[href]")	//Selects all elements with an href attribute	
$("a[target='_blank']")	//Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	//Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	//Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	//Selects all even <tr> elements	
$("tr:odd")	//Selects all odd <tr> elements



//jQuery Events
// click	keypress	submit	load
// dblclick	keydown	change	resize
// mouseenter	keyup	focus	scroll
// mouseleave	 	blur	unload