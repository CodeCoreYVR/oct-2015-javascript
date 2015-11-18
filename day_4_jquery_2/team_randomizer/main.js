$(document).ready(function(){
  $("#team-form").on("submit", function(ev){
    ev.preventDefault();
    // clear the teams div
    $("#teams").html("");

    var teamMembers    = $("#team-members").val().split(",");
    var membersPerTeam = parseInt($("#team-count").val());

    // Validations
    if (membersPerTeam < 2 || membersPerTeam > teamMembers.length) {
      $("#team-members-group").addClass("has-error");
      $("#team-members-group").append("<p class='help-block' id='error-message'> \
                                        Must be more than 2 and less than the \
                                        number of team members</p>");
      return;
    }

    $("#team-members-group").removeClass("has-error");
    $("#error-message").remove();

    var teamMembersShuffled = _.shuffle(teamMembers);
    var numberOfTeams       = Math.floor(teamMembers.length / membersPerTeam);

    // Solution #1
    // var teams               = {};
    // var individualTeam      = [];
    // while(teamMembersShuffled.length > 0) {
    //   for(var i = 1; i <= numberOfTeams; i++) {
    //     individualTeam = [];
    //     var teamName   = "Team" + i;
    //     if(teams[teamName]) {
    //       individualTeam = teams[teamName];
    //     }
    //     individualTeam.push(teamMembersShuffled.pop());
    //     teams[teamName] = individualTeam;
    //   }
    // }

    // Solution #2
    var teams       = {};
    var currentTeam = 1;
    for(var i = 0; i < teamMembersShuffled.length; i++) {
      teams[currentTeam] = teams[currentTeam] ? teams[currentTeam] : [];
      teams[currentTeam].push(teamMembersShuffled[i]);
      if(currentTeam === numberOfTeams) {
        currentTeam = 1;
      } else {
        currentTeam++;
      }
    }

    for(var team in teams) {
      if(teams.hasOwnProperty(team)) {
        $("#teams").append("<h2>Team " + team + "</h2>");
        $("#teams").append("<ul>");
        for(var i = 0; i < teams[team].length; i++) {
          $("#teams").append("<li>" + teams[team][i] + "</li>");
        }
        $("#teams").append("</ul>");
      }
    }

  });
});
