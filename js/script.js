$(document).ready(function () {
  var username = "Ebu13"; // GitHub kullanıcı adınız
  var url = "https://api.github.com/users/" + username + "/repos";

  $.get(url, function (data) {
    var projects = '<div class="row">';
    $.each(data, function (index, project) {
      if (index % 3 == 0 && index != 0) {
        projects += '</div><div class="row">';
      }
      projects += '<div class="col-md-4 mb-4">';
      projects += '<div class="card">';
      projects += '<div class="card-body">';
      projects += '<h4 class="card-title">' + project.name + "</h4>";
      projects += '<p class="card-text">' + project.description + "</p>";
      projects +=
        '<a href="' +
        project.html_url +
        '" class="btn btn-primary">Projeyi Görüntüle</a>';
      projects += "</div></div></div>";
    });
    projects += "</div>";
    $("#projects").html(projects);
  });
});
