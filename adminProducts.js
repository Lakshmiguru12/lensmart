let show_products = document.querySelector(".table-responsive");
let dataURL = `https://lensmart-backend3-0.onrender.com/products`;
let accestoken = localStorage.getItem("accestoken");
// onload window
window.addEventListener("load",()=>{
    if(accestoken){
        fetch(dataURL)
        .then((res)=> res.json())
        .then((data)=>{
            // let ndata = [...data]
            // data.map((ele)=> console.log(ele));
            // console.log(data)
            renderCards(data);
        })
    }
    else{
        window.location.replace("lenskart.com");
    }
})

// rendering cards
function renderCards(data){
    let a = data.map((ele)=> createcards(ele.title,ele.frameImg,ele.frameType,ele.discountedPrice));
    show_products.innerHTML = a.join("");
    
}

//creating cards 
function createcards(title,image,frame,price){
    let card = `<div class="small-cards">
    <img src="${image}" alt="">
    <h4>${title}</h4>
    <p>Frame size - ${frame}</p>
    <h3>${price}</h3>
    <h3></h3>
    <button>delete</button>
</div>`
return card;
}