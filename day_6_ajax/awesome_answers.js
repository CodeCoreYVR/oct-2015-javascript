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
        // data[i] > {id: 123, title: "How are you?"}
        var rendered = Mustache.render(template, data[i]);
        $('#questions').prepend(rendered);
      }
      // for(var i = 0; i < data.length; i++) {
      //     $('#questions').prepend("<div><h2>" + data[i].id + " - " + data[i].title +
      //                               "</h2><hr></div>");
      // }

    }
  });

  $("#questions").on("click", ".question-title", function(){
    // Make ajax request to the server to fetch details about the question
    // URL looks like: GET => http://localhost:3000/questions/314.json
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions/" + $(this).data("id") + ".json",
      error: function(){
        alert("can't fetch question details");
      },
      success: function(data) {
        console.log(data);
        var template = $('#question-details').html();
        Mustache.parse(template);
        rendered = Mustache.render(template, data);
        $("#single-question-details").html(rendered);
      }
    })
  });


});
