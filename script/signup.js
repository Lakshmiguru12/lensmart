let url = "https://lensmart-backend3-0.onrender.com"

let dispLog = document.querySelector('.signin-box');
let dispup = document.querySelector('.signup-box');
let backgrounddisp = document.getElementsByClassName('overlay')[0];
let a = document.querySelector('.signin-box span');
let b = document.querySelector('.signup-box span');

let signupform= document.querySelector("#sign-up-form")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let mobile = document.getElementById("mobile")
let email = document.getElementById("email")
let password = document.getElementById("password")
let userName = document.getElementById("userName")


signupform.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchdata()

})

async function fetchdata() {
    let obj = {
        username:userName.value,
        firstname: firstName.value,
        lastname: lastName.value,
        mobile: mobile.value,
        email: email.value,
        password: password.value

    }
    try{
    let fetchedata = await fetch(`${url}/users`);
    let resData = await fetchedata.json();

    for (let i of resData) {
        if (i.username == obj.username) {
            alert("UserName already Exists");
            return;
        }
    }

    for (let i of resData) {
        if (i.email == obj.email) {
            alert("Email already Exists");
            return;
        }
    }

    // password strength checker function 
    if (passwordcheck(obj.password.split("")) == false || obj.password.length <= 5) {
        alert("Password must contains one special charecter and length must be greater than 5")
        return;
    }



    let res = await fetch(`${url}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    let data = await res.json();
    console.log(data)
    showLogin()
    alert("Account Created successfull");
}
catch(err)
{
    console.log(err);
}

    // window.location.assign("/signin.html")
}

function showLogin(){
    dispLog.classList.add('show-sign-in')
    backgrounddisp.classList.add('show-overlay');
    dispup.classList.remove('show-sign-up');
};







// password

function passwordcheck(str) {
    let arr = "!@#$%^&*?";
    arr = arr.split("");
    for (let v = 0; v < arr.length; v++) {
        if (str.includes(arr[v])) return true;
    }
    return false;
}



