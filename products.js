


let container = document.getElementById("product-container")
let filter = document.getElementById("filter")
let cartdata = JSON.parse(localStorage.getItem("cart")) || []


let Full_Rim = document.getElementById("Full_Rim")
let Half_Rim = document.getElementById("Half_Rim")
let Rim_Less = document.getElementById("Rim_Less")
let Round_div = document.getElementById("Round_div")
let totaldata =[];
let api = "https://lensmart-backend3-0.onrender.com/products"



fetchrender()
function fetchrender(){
  
    fetch(api)
    .then((res)=>{
        return res.json();
    })
.then((data)=>{
    vamshi = data
   // console.log(data)
    display(data)
})
.catch((error)=>{
    console.log(error)
})

}

console.log(vamshi)






function display(data) {
    container.innerHTML = null
    data.forEach(element => {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let name = document.createElement("h3")
        let brand = document.createElement("p");
        let price = document.createElement("h3")
        let MRPprice = document.createElement("h3")
        let Category = document.createElement("p")
        let btn = document.createElement("button")


        btn.addEventListener("click", () => {

            if (duplicate(element)) {
                //console.log("fhg")
                alert(" Product already added to cart")
            } else {
                cartdata.push({ ...element, quantity: 1 })
                alert(" Product is added to cart")
                console.log(element)
                adding_data_cart(element)
                localStorage.setItem("cart", JSON.stringify(cartdata))

            }

        })


        img.src = element.frameImg;
        brand.textContent = element.brandName
        name.textContent = element.title;
        price.textContent = `₹${element.discountedPrice}`;
        MRPprice.innerText = `₹${element.price}`
        MRPprice.setAttribute("class", "MRPprice")


        Category.textContent = element.Category;
        btn.textContent = "Add To Cart"


        let price_div = document.createElement("div")
        price_div.setAttribute("class", "price_div")
        price_div.append(price, MRPprice)
        card.append(img, name, brand, price_div, Category, btn)
        container.append(card)
    });

}


function duplicate(el) {
    for (let i = 0; i < cartdata.length; i++) {

        if (el.id == cartdata[i].id) {
            return true
        }


    }
    return false
}


async function adding_data_cart(obj) {

    try {

        let res = await fetch("https://lensmart-backend3-0.onrender.com/product_status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

    } catch (error) {
        console.log(error)
    }

}
















fetch(api)
.then((res)=>{
    return res.json();
})
.then((data)=>{






})
.catch((error)=>{
console.log(error)
})

















// code of Bhaswati Mandal+++++++++++++++++++++++++++++++++


// making dropdowns of the headers
//---------------> this is second third nav div h4 tags---->
// this is drop1
let dropdown1 = document.getElementById("drop1");
let head1 = document.getElementById("headone");

head1.addEventListener("mouseover", () => {
    dropdown1.style.display = "block";
})
head1.addEventListener("mouseout", () => {
    dropdown1.style.display = "none";
})
dropdown1.addEventListener("mouseover", () => {
    dropdown1.style.display = "block";
})
dropdown1.addEventListener("mouseout", () => {
    dropdown1.style.display = "none";
})

// this is drop2
let dropdown2 = document.getElementById("drop2");
let head2 = document.getElementById("headtwo");
let dro21 = document.getElementById("dr1");
let dro22 = document.getElementById("dr2");
let dro23 = document.getElementById("dr3");
let dro24 = document.getElementById("dr4");
let dro3 = document.getElementById("droper3");
head2.addEventListener("mouseover", () => {
    dropdown2.style.display = "block";
    dro21.style.color = "white";
    dro22.style.color = "white";
    dro23.style.color = "white";
    dro24.style.color = "white";
})
head2.addEventListener("mouseover", () => {
    dropdown2.style.display = "block";
})
head2.addEventListener("mouseout", () => {
    dropdown2.style.display = "none";
})
dropdown2.addEventListener("mouseover", () => {
    dropdown2.style.display = "block";
})
dropdown2.addEventListener("mouseout", () => {
    dropdown2.style.display = "none";
})

/// this is drop3 :
let head3 = document.getElementById("headthree");
let dropdown3 = document.getElementById("drop3");
head3.addEventListener("mouseover", () => {
    dropdown3.style.display = "block";
})
head3.addEventListener("mouseout", () => {
    dropdown3.style.display = "none";
})
dropdown3.addEventListener("mouseover", () => {
    dropdown3.style.display = "block";
})
dropdown3.addEventListener("mouseout", () => {
    dropdown3.style.display = "none";
})

// this is drop4
let head4 = document.getElementById("headfour");
let dropdown4 = document.getElementById("drop4");
head4.addEventListener("mouseover", () => {
    dropdown4.style.display = "block";
})
head4.addEventListener("mouseout", () => {
    dropdown4.style.display = "none";
})
dropdown4.addEventListener("mouseover", () => {
    dropdown4.style.display = "block";
})
dropdown4.addEventListener("mouseout", () => {
    dropdown4.style.display = "none";
})

// this is drop5
let head5 = document.getElementById("headfive");
let dropdown5 = document.getElementById("drop5");
head5.addEventListener("mouseover", () => {
    dropdown5.style.display = "block";
})
head5.addEventListener("mouseout", () => {
    dropdown5.style.display = "none";
})
dropdown5.addEventListener("mouseover", () => {
    dropdown5.style.display = "block";
})
dropdown5.addEventListener("mouseout", () => {
    dropdown5.style.display = "none";
})

// this is drop7
let head7 = document.getElementById("headseven");
let dropdown7 = document.getElementById("drop7");
head7.addEventListener("mouseover", () => {
    dropdown7.style.display = "block";
})
head7.addEventListener("mouseout", () => {
    dropdown7.style.display = "none";
})
dropdown7.addEventListener("mouseover", () => {
    dropdown7.style.display = "block";
})
dropdown7.addEventListener("mouseout", () => {
    dropdown7.style.display = "none";
})

