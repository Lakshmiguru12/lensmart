let show_products = document.querySelector(".table-responsive");
let dataURL = `https://lensmart-backend3-0.onrender.com/products`;
let accestoken = localStorage.getItem("accestoken");
let add_products_button = document.querySelector(".card-header > button");
let signupBox = document.getElementById("signup-box")
let cross = document.getElementById("cross");
let products_form = document.querySelector("#signup-box > form");

// getting form data 

// ------> eventlinstners 
// for buttons
add_products_button.addEventListener("click",()=>{
    signupBox.style.display = "grid";
})
cross.addEventListener("click",()=>{
    signupBox.style.display = "none";
})

// for form submission for product add 
let mybrandname = document.getElementById("brandName");
products_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj = {
        brandName: mybrandname.value,
        title: document.getElementById("title").value,
        frameSize: document.getElementById("frameSize").value,
        price: document.getElementById("price").value,
        discountedPrice: document.getElementById("discountedPrice").value,
        frameType: document.getElementById("frameType").value,
        frameShape: document.getElementById("frameShape").value,
        frameColor: document.getElementById("frameColor").value,
        gender: document.getElementById("gender").value,
        frameImg: document.getElementById("frameImg").value,
        frameImg1: document.getElementById("frameImg1").value,
        maleModelImg: document.getElementById("maleModelImg").value,
        femaleModelImg: document.getElementById("femaleModelImg").value,
        material: document.getElementById("material").value,
        weightGroup: document.getElementById("weightGroup").value,
        collection: document.getElementById("collection").value,
        glassColor: document.getElementById("glassColor").value,
        frameWidth: document.getElementById("frameWidth").value,
        productType: document.getElementById("productType").value,
        ModelNo: document.getElementById("ModelNo").value,
        frameDimensions: document.getElementById("frameDimensions").value,
        suitedFor: document.getElementById("suitedFor").value,
      }
      fetch(dataURL, {
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
// onload window
let ndata;
window.addEventListener("load",()=>{
    if(accestoken){
        fetch(dataURL)
        .then((res)=> res.json())
        .then((data)=>{
             ndata = data;
            // data.map((ele)=> console.log(ele));
            // console.log(data)
            renderCards(data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    else{
        window.location.replace("lenskart.com");
    }
})

// rendering cards
function renderCards(data){
    let a = data.map((ele)=> createcards(ele.title,ele.frameImg,ele.frameType,ele.discountedPrice,ele.ModelNo,ele.brandName));
    show_products.innerHTML = a.join("");
    let btns = document.querySelectorAll(".deleteBTN");
    let deleteBTNS = [...btns]
    deleteBTNS.forEach((ele,index)=>{
        ele.addEventListener("click",()=>{
            data.splice(index,1);
            renderCards(ndata);
        })
    });
}

//creating cards 
function createcards(title,image,frame,price,ModelNo,brandName){
    let card = `<div class="small-cards">
    <div> <img src="${image}" alt=""></div>
    <div>
        <h4>${title}</h4>
        <p><span>Brand:</span>${brandName}</p>
        <p><span>size: </span> ${frame}</p>
        <p>Model number: ${ModelNo}</p>
        <h3><h4><i class="las la-rupee-sign"></i>${price}</h3>
        <button class ="deleteBTN">Delete <span class = "las la-trash-alt"></span></button>
    </div>
</div>`
return card;
}