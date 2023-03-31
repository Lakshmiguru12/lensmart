let url = "https://lensmart-backend3-0.onrender.com"


let form = document.querySelector("form")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let mobile = document.getElementById("mobile")
let email = document.getElementById("email")
let password = document.getElementById("password")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetchrenderdata()

})

async function fetchrenderdata() {
    let obj = {
        username: firstName.value + "" + lastName.value,
        firstname: firstName.value,
        lastname: lastName.value,
        mobile: mobile.value,
        email: email.value,
        password: password.value

    }

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
}








// password

function passwordcheck(str) {
    let arr = "!@#$%^&*?";
    arr = arr.split("");
    for (let v = 0; v < arr.length; v++) {
        if (str.includes(arr[v])) return true;
    }
    return false;
}



