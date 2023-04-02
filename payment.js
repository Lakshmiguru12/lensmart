// paymentSystem.onPaymentSuccess(function() {
//     // Get the pop-up element
//     var popup = document.getElementById("payment-popup");

//     // Show the pop-up
//     popup.style.display = "block";

//     // Hide the pop-up after a few seconds
//     setTimeout(function() {
//       popup.style.display = "none";
//     }, 3000); // 3000 milliseconds = 3 seconds
//   });

let cardNumber = document.getElementById("Card-Nu")
// addEventListener('change', (e)=>{
//     console.log('runnign');
// });

// function getFormValues (){
// console.log('this --->', this)
// }

// console.log('carnn first--->', cardNumber);

let monthYear = document.getElementById("month-year")
let cvv = document.getElementById("Cvv")
let cardHolderName = document.getElementById("Card-name")
let btn = document.getElementById("button")


let form= document.getElementById("form");

btn.addEventListener("click", (e) => {
   console.log('carnn0 --->', cardNumber);
    e.preventDefault();
    if (cardNumber.value !="" && monthYear.value !="" && cvv.value !="" && cardHolderName.value !="") {
        Swal.fire("Thanks for Shopping with us!", "Your Order has been placed", "success")
        myFunction();

    } else {
        Swal.fire(
            'Please put the right details!',
            'Something went wrong!',
            'error'
        )
    }

});

function myFunction() {
    setTimeout(() => {
        location.replace("./index.html")
    }, 5000)

}





