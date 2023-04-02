// Displaying Login Card @Vamshi Krishna

let user1 = document.getElementById("user1");
let loginCard = document.querySelector('.signin-box');
let signupCard = document.querySelector('.signup-box');
let overlay = document.getElementsByClassName('overlay')[0];
let closesignin = document.querySelector('.signin-box span');
let closeSignup = document.querySelector('.signup-box span');

function showLogin(){
    loginCard.classList.add('show-sign-in')
    overlay.classList.add('show-overlay');
    signupCard.classList.remove('show-sign-up');
};

function showsignup(){
    loginCard.classList.remove('show-sign-in');
    signupCard.classList.add('show-sign-up');
    overlay.classList.add('show-overlay');
};

function closePopup(){
    loginCard.classList.remove('show-sign-in');
    signupCard.classList.remove('show-sign-up');
    overlay.classList.remove('show-overlay');
};

closeSignup.addEventListener('click',()=>{
    closePopup()
});

closesignin.addEventListener('click',()=>{
    closePopup()
});

















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

// this is drop8
let head8 = document.getElementById("headeight");


// let user2 = sessionStorage.getItem("user2") || "Sign In & Sign Up";
// let user1 = document.getElementById("user1");
// //let username=localStorage.getItem("user");
// console.log(user2)
// user1.addEventListener("click", () => {
//     window.location.href = "/signup.html";
// })
// user1.textContent = user2;

//--------------> making an middle part of website

// let wall = document.getElementById("wallpaper1");
// let wallpapers = [
//     "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
//     "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/hooper-eye-web.jpg",
//     "https://static1.lenskart.com/media/desktop/img/Nov22/mens-edit/desktop.jpg",
//     "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
//     "https://static1.lenskart.com/media/desktop/img/Dec22/blend-edit/web.jpg",
//     "https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif",
//     "https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif",
//     "https://static1.lenskart.com/media/desktop/img/Dec22/5-Jan/1920x530(play-now)%20(1).gif",
//     "https://static1.lenskart.com/media/desktop/img/Nov22/airplay/desk-play.jpg",
//     "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
// ]
//   async function loadSliderImages() {
//     wallpapers.forEach((imageUrl) => {
//         const img = document.createElement('img');
//         img.src = imageUrl;
//         container.appendChild(img);
//       });

//       const prevBtn = document.getElementById('slider-prev');
//       const nextBtn = document.getElementById('slider-next');
//       const imagesList = document.querySelectorAll('#slider-container img');
//       let currentIndex = 0;
//     }
let arrSpecs1 = [
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
        name: "Round"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
        name: "Cat-Eye"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
        name: "Clubmaster"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
        name: "Transparent"
    }
]
let arrSpecs2 = [
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
        name: "Blend Edit"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
        name: "Air Clip-On"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
        name: "Air Flex"
    },
    {
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
        name: "Retro Aviator"
    }
]
console.log(showSlider(arrSpecs1, arrSpecs2));
showSlider(arrSpecs1, arrSpecs2);
let showTrends = document.getElementById("SpecsSlider");
function showSlider(data1, data2) {
    data1.forEach(el => {
        let divEl = document.createElement("div");
        let img = document.createElement('img');
        img.src = el.image;
        let nameEl = document.createElement("p");
        nameEl.textContent = el.name;

        divEl.append(img, nameEl);
        showTrends.append(divEl);
    });
    data2.forEach(el => {
        let divEl = document.createElement("div");
        let img = document.createElement('img');
        img.src = el.image;
        let nameEl = document.createElement("p");
        nameEl.textContent = el.name;

        divEl.append(img, nameEl);
        showTrends.append(divEl);
    });
}