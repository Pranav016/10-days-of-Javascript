//jQuery effects

//1. Hide/show
$("#hide").click(function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });


// $(selector).hide(speed,callback);
// $(selector).show(speed,callback);
// The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.
// The optional callback parameter is a function to be executed after the hide() or show() method completes.
$("button").click(function(){
    $("p").toggle();
  });


//2. Fade

// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo()
// The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
// $(selector).fadeTo(speed,opacity,callback);


//3. Slide

// slideDown()
// slideUp()
// slideToggle()


//4. Animations
// For jQuery animations- https://www.w3schools.com/jquery/jquery_animate.asp


//6. jQuery Callback Functions
// A callback function is executed after the current effect is 100% finished.
$("button").click(function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });


//7. Chaining
//https://www.w3schools.com/jquery/jquery_chaining.asp