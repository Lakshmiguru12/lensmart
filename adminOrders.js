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

let userTable = document.querySelector(".table-responsive>table>tbody");

fetchdata();
function fetchdata(){
    fetch(`https://lensmart-backend3-0.onrender.com/users`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        render(res);
    })
}
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
                alert("Cancelled succesfully");
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
    </tr>`
    return td;
}

