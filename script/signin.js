let URL = "https://lensmart-backend3-0.onrender.com"

const usr = localStorage.getItem('username') || null;
let sign_in_password = document.getElementById("sign_in_password")
let sign_in_userName = document.getElementById("sign_in_userName")
let Signinform = document.querySelector("#sign-in-form")
let btn = document.getElementById("sign_in_submit")
let usrData = document.querySelector("#disp-user")

if (userName.value && password.value) {
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = 'white';
    btn.style.border = 'none'
}
else {
    btn.style.backgroundColor = "#c1bebe";
    btn.style.color = '#000042';
}



Signinform.addEventListener("submit", (e) => {
    e.preventDefault();
    if(sign_in_userName.value === "admin@lensmart.in"&&sign_in_password.value==="Noida@123"){
        localStorage.setItem("accestoken","varified@Noida");
        window.location.replace("./admin.html")
    }
  else{
    fetchrenderdata()
  } 
})





async function fetchrenderdata() {
  


    try {

        let loginCred = {
            username: sign_in_userName.value,
            password: sign_in_password.value
        }
       
//  loader add here display block



        let res = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(loginCred)
        })

        let data = await res.json();


// loader display none




        localStorage.setItem("Token", (data.accessToken));
        localStorage.setItem("username", (data.user.firstname));
        alert("Login Success");
        console.log(usr)
        //location.reload()
    } catch (error) {



     
        alert("username / password missmatch");
        usrData.innerText = 'Sign In & Sign Up'

        console.log(error)
    }

}

if(usr)
{
    usrData.innerText = usr;
}