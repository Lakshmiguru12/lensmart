let userTable = document.querySelector(".table-responsive>table>tbody");
let add_products_button = document.querySelector(".card-header > button");
let cross = document.getElementById("cross");
let users_form = document.querySelector("#signup-box>form");
let signupBox = document.getElementById("signup-box");
window.addEventListener("load",()=>{
    fetch(`https://lensmart-backend3-0.onrender.com/users`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        render(res);
    })
})

// ------> eventlinstners 
// for buttons
add_products_button.addEventListener("click",()=>{
    signupBox.style.display = "grid";
})
cross.addEventListener("click",()=>{
    signupBox.style.display = "none";
})


// for form submission for product add 
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
      })
})

// render function 

function render(data){
    let out  = data.map((ele)=>{
        let a = createtbody(ele.avatar,ele.email,ele.firstname,ele.lastname,ele.id,ele.password,ele.username);
        return a;
    })
    userTable.innerHTML = out.join("");
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
        <td><button id="delete">Delete</button></td>
        <td><button id="edit">Edit</button></td>
    </tr>`
    return td;
}

