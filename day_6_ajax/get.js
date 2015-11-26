$.get("http://localhost:3002/messages", function(data){
  // data in our app will be an array of objects containing details
  // about messages
  for(var i = 0; i < data.length; i++) {
    console.log(data[i].id);
  }
});
