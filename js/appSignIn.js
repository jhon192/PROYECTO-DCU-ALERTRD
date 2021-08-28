const email = document.getElementById('email')
const password = document.getElementById('password')
const signinBtn = document.getElementById('form signin')
const dangerdiv = document.createElement('div')

signinBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((result) => {
        console.log(result);
        //mensaje de confirmacion
        dangerdiv.innerText = `Great`
        dangerdiv.style.color = "white";
        dangerdiv.style.backgroundColor = "green";
        dangerdiv.style.margin = "20px";
        dangerdiv.style.padding = "20px";
        dangerdiv.style.width = "80%";
        dangerdiv.style.textAlign = "center";
        dangerdiv.style.fontSize = "20px";
        document.getElementById("message").appendChild(dangerdiv);

        setTimeout(() => {
            window.location.replace('/html/Login.html')
        }, 2000);
    }).catch((err) => {
        //mensaje de error
        dangerdiv.innerText = `Error: ${err.code}`
        dangerdiv.style.color = "white";
        dangerdiv.style.backgroundColor = "red";
        dangerdiv.style.margin = "20px";
        dangerdiv.style.padding = "20px";
        dangerdiv.style.width = "80%";
        dangerdiv.style.textAlign = "center";
        dangerdiv.style.fontSize = "20px";
        document.getElementById("message").appendChild(dangerdiv);
    });
})