$(".shape").on("click", function(){
  console.log("Clicked!");
});

$(".blue.circle").on("mouseenter", function(){
  console.log("Blue Circle: Go Away!");
});

$(".blue.circle").on("mouseleave", function(){
  console.log("Blue Circle: Goodbye!");
});

$("tr").on("mouseenter", function(){
  $(this).attr("class", "highlight");
});

$("tr").mouseleave(function(){
  $(this).attr("class", "");
});

$("#button-1").on("click", function(){
  $(".shape").remove();
});

$("#button-2").on("click", function(){
  $(this).attr("disabled", true);
});

$("#button-3").on("click", function(){
  // $(this).html("Button 3 was clicked");
  $("#button-message").html("Button 3 was clicked");
});
