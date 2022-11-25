// FizzBuzz 
const elForm = document.querySelector(".form__fizzbuzz");
const elInput = elForm.querySelector(".input__fizzbuzz");
const elResult = document.querySelector(".result__fizzbuzz");

// ================================= FizzBuzz ============================================

elForm.addEventListener("submit" , e => {
    e.preventDefault();
    
    const elInputValue = Number(elInput.value.trim());
    if(elInputValue === 0 || elInputValue === ""){
        alert("Iltimos son kiriting❌❌❌❌")
    }else if(elInputValue % 3 == 0 && elInputValue % 5 == 0){
        elResult.textContent = "FizzBuzz"
        elResult.classList.add("bg-success" , "fw-bold");
        elResult.classList.remove("bg-warning" , "fw-bold");
        elResult.classList.remove("bg-primary", "fw-bold");
        elResult.classList.remove("bg-danger");
    }else if(elInputValue % 3 == 0){
        elResult.textContent = "Fizz"
        elResult.classList.add("bg-warning" , "fw-bold");
        elResult.classList.remove("bg-primary", "fw-bold");
        elResult.classList.remove("bg-success" , "fw-bold");
        elResult.classList.remove("bg-danger");
    }else if (elInputValue % 5 == 0){
        elResult.textContent = "Buzz"
        elResult.classList.add("bg-primary", "fw-bold");
        elResult.classList.remove("bg-warning" , "fw-bold");
        elResult.classList.remove("bg-success" , "fw-bold");
        elResult.classList.remove("bg-danger");
    }else {
        elResult.textContent = "Berilgan son 3 ga ham 5 ga ham bo'linmaydi!!"
        elResult.classList.add("bg-danger");
    }
});


// =================================== Find The Number ====================================

// FindTheNumber 
const elFormFind = document.querySelector(".form__find");
const elInputFind = elFormFind.querySelector(".find__input");
const elNumber = document.querySelector(".alert-number");
const elWin = document.querySelector(".alert-win");
const elBtnFind = document.querySelector(".btn-find");
const elAlertFind = document.querySelector(".alert-find");

let x = Math.round(Math.random() * 100);

let maxAttemp = 6;
elNumber.textContent = `Urinishlar soni: ${maxAttemp}`

elFormFind.addEventListener("submit" , e => {
    e.preventDefault();
    
    
    maxAttemp--;
    elNumber.textContent = `Urinishlar soni: ${maxAttemp}`
    
    const elInputFindValue = Number(elInputFind.value);
    
    if(elInputFindValue > x){
        elWin.textContent = "Random sondan katta son kiritdiz."
        elWin.classList.add("bg-danger");
    }else if(elInputFindValue < x){
        elWin.textContent = "Random sondan kichik son kiritdiz."
        elWin.classList.remove("bg-danger");
        elWin.classList.add("bg-primary");
    }else if(elInputFindValue === x){
        elWin.textContent = "Urra siz sonni topdingiz😎😊"
        elAlertFind.textContent = `Siz izlagan son: ${x}`
        elAlertFind.classList.add("alert-find--js");
        elInputFind.setAttribute("disabled" , true);
        elBtnFind.setAttribute("disabled" , true);
        elWin.classList.add("bg-success");
        elWin.classList.remove("bg-primary");
        elWin.classList.remove("bg-danger");
    }
    
    if(maxAttemp == 0){
        elInputFind.setAttribute("disabled" , true);
        elBtnFind.setAttribute("disabled" , true);
        elAlertFind.textContent = `Siz izlagan son: ${x}`
        elAlertFind.classList.add("alert-find--js");
        elNumber.textContent = "Urinishlar soni tugadi:"
        elNumber.classList.add("bg-danger", "text-white");
    }

    elInputFind.value = "";
    
})

