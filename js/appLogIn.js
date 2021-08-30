const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("form login");
const dangerdiv = document.createElement("div");
const logout = document.getElementById("logout");

loginBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((result) => {
      //redirige a la pagina principa;
      window.location.replace("../Principal.html");
    })
    .catch((err) => {
      //mensaje de error
      dangerdiv.innerText = `Error: ${err.code}`;
      dangerdiv.style.color = "white";
      dangerdiv.style.backgroundColor = "red";
      dangerdiv.style.margin = "20px";
      dangerdiv.style.padding = "20px";
      dangerdiv.style.width = "80%";
      dangerdiv.style.textAlign = "center";
      dangerdiv.style.fontSize = "20px";
      document.getElementById("message").appendChild(dangerdiv);
    });
});

logout.addEventListener("click", () => {
  auth.signOut()
  .then(() => {
    console.log('sign out')
    window.location.replace('Principal.html')
  }).catch((error) => {
    console.log(error)
  });
});
