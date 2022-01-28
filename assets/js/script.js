var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
     
     // var divBox = document.createElement("div") - playing extra with div side box
      for (var i = 0; i < data.length; i++) {
        var userLogin = document.createElement('h2');
       // login.textContent = data[i].login  - using JQUERY
        var urlLogin = document.createElement('li');
      //  urlLogin.textContent = data[i].organizations_url

        // console.log(data)
        // $(".flex-column").append(login, urlLogin) - using JQUERY

        /// adding without jQuery - using JQUERY
        userLogin.textContent = data[i].login;
        urlLogin.textContent = data[i].url;
        
        
        divBox.append(userLogin, urlLogin);
       userContainer.append(divBox)

        
      }
    });
}
fetchButton.addEventListener('click', getApi);
