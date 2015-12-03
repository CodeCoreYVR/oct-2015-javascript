$("a").on("click", function(){
  event.preventDefault();
  console.log($(this).attr("href"));
});
