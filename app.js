 // selecionando os ids e a class 
 const sign_in_btn = document.querySelector("#sign-in-btn"); 
 const sign_up_btn = document.querySelector("#sign-up-btn"); 
 const container = document.querySelector(".container"); 
 
 // variável dos links de login para tela mobile 
 const sign_in_btn2 = document.querySelector("#sign-in-btn2"); 
 const sign_up_btn2 = document.querySelector("#sign-up-btn2"); 

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode"); // add tela 
}); 

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode"); // remove tela 
}); 

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2"); // add tela 
}); 

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2"); // remove tela 
}); 