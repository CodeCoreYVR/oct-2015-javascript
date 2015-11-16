$(".shape").on("click", function(){
  console.log($(this).attr("class"));
});

$(".shape").on("click", function(){
  $(this).hide();
});

$(".shape").on("click", function(){
  $(this).parent().hide();
});

$(".container").on("click", function(){
  $(this).children().hide();
});

$("a").on("mouseenter", function(){
  console.log("You mouse entered a link: " + $(this).attr("href"));
});

$(".button").on("click", function(){
  $("#button-message").html("Button " + $(this).attr("id") + " was clicked");
});
