let userTable = document.querySelector(".table-responsive>table>tbody");
let add_products_button = document.querySelector(".card-header > button");
let cross = document.getElementById("cross");
let users_form = document.querySelector("#signup-box>form");
let signupBox = document.getElementById("signup-box");
fetchdata();
function fetchdata(){
    fetch(`https://lensmart-backend3-0.onrender.com/users`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        render(res);
    })
}
let userAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5hbWUiLCJwYXNzd29yZCI6IiQyYiQxMCRjZzRXRGppZGY2Z3lmNDllQ296bEFPMHBybmRob0FPRXRxRWdDLjIvRURZQjhHLmR0YmNlYSIsImVtYWlsIjoiYW51cmFnamF0b2ZmaWNpYWxAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiYWxpIiwibGFzdG5hbWUiOiJiYWJhIiwiYXZhdGFyIjoiaHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvUW1kM1c1RHVoZ0hpckxIR1ZpeGk2Vjc2TGhDa1pVejZwbkZ0NUFKQml5dkh5ZS9hdmF0YXIvMzA0LmpwZyIsImNyZWF0ZWRBdCI6MTY4MDM3NDA1MjEwNCwiaWQiOjU5LCJpYXQiOjE2ODAzNzQxMDAsImV4cCI6MTY4MDM4NDkwMH0.NDu2FVORWuDEVNqWZpnLpwwSyGeECRYyg2OrdtRIjiI";
// ------> eventlinstners 
// for buttons
add_products_button.addEventListener("click",()=>{
    signupBox.style.display = "grid";
})
cross.addEventListener("click",()=>{
    signupBox.style.display = "none";
})

// dynamic headers
let change  = document.getElementsByClassName("card-single");
let changes = [...change];
changes.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        if(index===0){
            window.location.replace("./adminUsers.html");
        }
        else if(index===1){
            window.location.replace("./adminOrders.html");
        }
        else if(index===2){
            window.location.replace("./adminProducts.html");
        }else if(index ===3){
            window.location.replace("./admin.html")
        }
    })
})
// for form submission for users add 
users_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj = {
        avatar: document.getElementById("imageURL").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        password: document.getElementById("password").value
      }
    //   console.log(obj);
      fetch(`https://lensmart-backend3-0.onrender.com/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then((res)=> res.json())
      .then((r)=> {
        console.log(r);
        alert("User added succesfully");
        fetchdata();
      })
})

// render function 

function render(data){
    let out  = data.map((ele)=>{
        let a = createtbody(ele.avatar,ele.email,ele.firstname,ele.lastname,ele.id,ele.password,ele.username);
        return a;
    })
    userTable.innerHTML = out.join("");
    let delBTN = document.getElementsByClassName("delete");
    let deleteBTN = [...delBTN];
    deleteBTN.forEach((ele,index)=>{
        ele.addEventListener("click",()=>{
            fetch(`https://lensmart-backend3-0.onrender.com/users/${data[index].id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${userAuthToken}`
                },
            })
            .then((res)=>{
                res.json()
            })
            .then((res)=>{
                console.log(res);
                alert("deleted succesfully");
                fetchdata();
            })
        });
    })
}

// create cards 

function createtbody(avatar,email,firstname,lastname,id,password,username){
    let td = `<tr>
        <td><img src="${avatar||`./images/profileimage.jpg`}" alt="profile image"></td>
        <td>${username}</td>
        <td>${firstname} ${lastname}</td>
        <td>${email}</td>
        <td>${password}</td>                          
        <td>${id}</td>
        <td><button class="delete">Delete</button></td>
        <td><button class="edit">Edit</button></td>
    </tr>`
    return td;
}

