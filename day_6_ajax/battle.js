$.get("https://chat-battle.herokuapp.com/messages", function(data){
  for(var i = 0; i < data.length; i++) {
    console.log(data[i].id);
  }
});

$.post("https://chat-battle.herokuapp.com/messages", {body: "Tam"});

$.ajax({
  method: "PATCH",
  url: "https://chat-battle.herokuapp.com/messages/13916",
  data: {body: "Tam Kbeili"}
});

$.ajax({
  method: "DELETE",
  url: "https://chat-battle.herokuapp.com/messages/13916"
});
