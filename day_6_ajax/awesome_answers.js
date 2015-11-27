$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/questions.json",
    error: function(){
      alert("Problem loading questions, please reload");
    },
    success: function(data) {
      console.log(data);
      var template = $('#question-summary').html();
      Mustache.parse(template);   // optional, speeds up future uses

      for(var i = 0; i < data.length; i++) {
        var rendered = Mustache.render(template, data[i]);
        $('#questions').prepend(rendered);
      }
      // for(var i = 0; i < data.length; i++) {
      //     $('#questions').prepend("<div><h2>" + data[i].id + " - " + data[i].title +
      //                               "</h2><hr></div>");
      // }

    }
  });
});
