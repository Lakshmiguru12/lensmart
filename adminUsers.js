let userTable = document.querySelector(".table-responsive>table>tbody");
let add_products_button = document.querySelector(".card-header > button");
let cross = document.getElementById("cross");
let users_form = document.querySelector("#signup-box>form");
let signupBox = document.getElementById("signup-box");
let userAuthToken = localStorage.getItem("accestoken");
let body = document.querySelector("body")
// localStorage.setItem("token",1)
let head = document.querySelector("head");
if(userAuthToken){
    fetchdata();
}
else{
  let style = document.createElement("style");
  style.innerHTML = `body {
        background-color: #2F3242;
      }
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -250px;
        margin-left: -400px;
      }
      .message-box {
        height: 200px;
        width: 380px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: 50px;
        color: #FFF;
        font-family: Roboto;
        font-weight: 300;
      }
      .message-box h1 {
        font-size: 60px;
        line-height: 46px;
        margin-bottom: 40px;
      }
      .buttons-con .action-link-wrap {
        margin-top: 40px;
      }
      .buttons-con .action-link-wrap a {
        background: #68c950;
        padding: 8px 25px;
        border-radius: 4px;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        transition: all 0.3s linear;
        cursor: pointer;
        text-decoration: none;
        margin-right: 10px
      }
      .buttons-con .action-link-wrap a:hover {
        background: #5A5C6C;
        color: #fff;
      }
      
      #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
        animation: float 1s infinite ease-in-out alternate;
      }
      #Polygon-2 {
        animation-delay: .2s; 
      }
      #Polygon-3 {
        animation-delay: .4s; 
      }
      #Polygon-4 {
        animation-delay: .6s; 
      }
      #Polygon-5 {
        animation-delay: .8s; 
      }
      
      @keyframes float {
          100% {
          transform: translateY(20px);
        }
      }
      @media (max-width: 450px) {
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -250px;
          margin-left: -190px;
        }
        .message-box {
          top: 50%;
          left: 50%;
          margin-top: -100px;
          margin-left: -190px;
          text-align: center;
        }
      }`;
      head.append(style);
    body.innerHTML = `
    <svg width="380px" height="500px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
        </g>
    </svg>
    <div class="message-box">
      <h1>403</h1>
      <p>Forbidden</p>
      <p>It seems like you are not authorized to acces this page</p>
      <div class="buttons-con">
        <div class="action-link-wrap">
          <a onclick="history.back(-1)" class="link-button link-back-button">Go Back</a>
          <a href="./index.html" class="link-button">Go to Home Page</a>
        </div>
      </div>
    </div>`
    
}
function fetchdata(){
    fetch(`https://lensmart-backend3-0.onrender.com/users`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        render(res);
    })
}
// let userAuthToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5hbWUiLCJwYXNzd29yZCI6IiQyYiQxMCRjZzRXRGppZGY2Z3lmNDllQ296bEFPMHBybmRob0FPRXRxRWdDLjIvRURZQjhHLmR0YmNlYSIsImVtYWlsIjoiYW51cmFnamF0b2ZmaWNpYWxAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiYWxpIiwibGFzdG5hbWUiOiJiYWJhIiwiYXZhdGFyIjoiaHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvUW1kM1c1RHVoZ0hpckxIR1ZpeGk2Vjc2TGhDa1pVejZwbkZ0NUFKQml5dkh5ZS9hdmF0YXIvMzA0LmpwZyIsImNyZWF0ZWRBdCI6MTY4MDM3NDA1MjEwNCwiaWQiOjU5LCJpYXQiOjE2ODAzNzQxMDAsImV4cCI6MTY4MDM4NDkwMH0.NDu2FVORWuDEVNqWZpnLpwwSyGeECRYyg2OrdtRIjiI";
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

