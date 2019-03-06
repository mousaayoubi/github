// Connect to Github using Ajax

function getProfile(event) {
  event.preventDefault();
  var username = document.getElementById("userInput").value;
  if (!username || username == "") {
    document.getElementById(
      "alert"
    ).innerHTML = `<div class="alert alert-danger" role="alert">
        Username is required
        </div>`;
  } else {
    //Success
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var user = JSON.parse(xhr.responseText);
        document.getElementById(
          "textResponse"
        ).innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${user.avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Public Repos: ${user.public_repos}</li>
            <li class="list-group-item">Public Gists: ${user.public_gists}</li>
        </ul>
        <div class="card-body">
            <a href="${
              user.html_url
            }" class="card-link" target="_blank">Github Profile</a>
        </div>
        </div>`;
      }
    };
  }
  xhr.open("GET", "https://api.github.com/users/" + username, true);
  xhr.send();
}

document
  .getElementById("userForm")
  .addEventListener("submit", getProfile, false);
