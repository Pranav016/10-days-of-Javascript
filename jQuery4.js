// useful code snippet
$("input").keypress(function (event){
    console.log(event.key);
});

$(document).keypress(function (event){
    console.log(event.key);
});

//challenge
$(document).keypress(function(event){
    $("h1").text(event.key)
});

//jQuery Event listener trick
$("h1").on("click",function(){
    // code 
});