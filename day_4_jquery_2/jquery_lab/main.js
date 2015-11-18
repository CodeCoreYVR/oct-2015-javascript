$(document).on('ready', function() {

  // $(".container").on("click", function(){
  //   $(this).children(".shape").addClass("highlight");
  // });
  //
  // $(".shape").mouseenter(function(){
  //   $(this).toggleClass("highlight");
  // });
  //
  // $(".shape").on("click", function(){
  //   if($(this).hasClass("small")) {
  //     $(this).hide();
  //   } else if($(this).hasClass("medium")) {
  //     // $(this).removeClass("medium").addClass("small");
  //     $(this).removeClass("medium");
  //     $(this).addClass("small");
  //   } else if($(this).hasClass("large")) {
  //     // $(this).removeClass("large").addClass("medium");
  //     $(this).removeClass("large");
  //     $(this).addClass("medium");
  //   }
  // });
  //
  // // $("#form-1").on("submit", function(){
  // //   $("#form-message").html($("input:text").val());
  // // });
  //
  // $("input:submit").on("click", function(){
  //   $("#form-message").html($("input:text").val());
  // });
  //
  // $("input:submit").on("click", function(){
  //   $("#form-message").append($("input:text").val());
  // });
  //
  // $("#button-1").on("click", function(){
  //   $("#green-container").toggle();
  // });
  //
  // $("#button-2").on("click", function(){
  //   $("#button-message").fadeOut(1000);
  // });
  //
  // $("#button-3").on("click", function(){
  //   $("#button-message").fadeIn(1000);
  // });
  //
  // $("#button-4").on("click", function(){
  //   $("#green-container").slideUp();
  // });
  //
  // $(document).on("keypress", function(event){
  //   var code = event.which;
  //   var char = String.fromCharCode(code);
  //   console.log("Key: " + char + " was pressed! Code is: " + code);
  // });
  //
  // // $(document).on("keypress", function(event){
  // //   var charCode = event.which;
  // //   var key      = String.fromCharCode(charCode);
  // //   if(key === "b") {
  // //     $(".blue.shape").toggle();
  // //   } else if(key === "r") {
  // //     $(".red.shape").toggle();
  // //   } else if(key === "k") {
  // //     $(".black.shape").toggle();
  // //   } else if(key === "g") {
  // //     $(".grey.shape").toggle();
  // //   } else if (key === " ") {
  // //     $("#green-container").append("<div class='small blue circle shape'></div>");
  // //   }
  // // });
  //
  // // $(document).on("keydown", function(){
  // //   console.log(">>> DOWN" + event.which);
  // //   if(event.which === 8) {
  // //     event.preventDefault();
  // //   }
  // // });
  //
  // $(document).on("keypress", function(){
  //   console.log(">>>>> PRESS");
  // });
  //
  // $(document).on("keyup", function(){
  //   console.log(">>>>>>>> UP");
  // });
  //
  // // $("input:text").on("keyup", function(){
  // //   $("#form-message").html($(this).val());
  // // });
  //
  // // $("input:text").on("keyup", function(){
  // //   var string = $(this).val();
  // //   var result = string.split("").reverse().join("");
  // //   $("#form-message").html(result);
  // // });
  //
  // $("input:text").on("keyup", function(){
  //   var result = 14 - $(this).val().length;
  //   $("#form-message").html(result + " characters remaining");
  // });
  //
  // $("form").on("submit", function(){
  //   var selectedColor = $("input:text").val();
  //   if($(".shape").hasClass(selectedColor)) {
  //     $("." + selectedColor).remove();
  //   } else {
  //     alert("Invalid color");
  //   }
  //   $("input:text").val("");
  // });
  //
  // $(".black.shape").on("click", function(ev){
  //   console.log("Black shape clicked!");
  //   ev.stopPropagation();
  // });
  //
  // $("#orange-container").on("click", function(){
  //   console.log("Orange Container clicked!");
  // });
  //
  // $("a").on("click", function(event){
  //   console.log("Link clicked");
  //   event.preventDefault();
  // });

  // $(".shape").on("click", function(){
  //   console.log("shape clicked");
  // });

  $(document).on("click", ".shape", function(){
    console.log("Shape clicked!");
  });


});
