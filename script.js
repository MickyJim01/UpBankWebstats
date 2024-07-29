auth0.createAuth0Client({
    domain: "dev-kjqdxfj1re5ahdqy.us.auth0.com",
    clientId: "et1gcxn07ei3Xl6IsIGj23CBDTNXsAD8",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }).then(async (auth0Client) => {
    // Assumes a button with id "login" in the DOM
    const loginButton = document.getElementById("login");
  
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      auth0Client.loginWithRedirect();
    });