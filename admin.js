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

