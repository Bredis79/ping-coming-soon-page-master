const formInput = document.querySelector(".input")
const inputEmail = document.querySelector("#email")
const btn = document.querySelector("#btn")
const errorMobile = document.querySelector(".errorMobile")
const errorDesktop = document.querySelector(".errorDesktop")

let paragraph = document.createElement("p")
paragraph = "Please provide a valid email address"


// email validation
const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function(event){
    event.preventDefault()
       
// condition for resolutio greater than 700px 
   if (event.view.window.innerWidth > 700){

        if (event.path[1][0].value.match(emailValid)){
            errorDesktop.classList.remove("visibleDesktop")
            inputEmail.style.border = ""
            } else {
                inputEmail.style.border = "2px solid red"
                formInput.style.marginBottom = "27px"
                errorDesktop.classList.add("visibleDesktop")
                errorDesktop.append(paragraph)
                paragraph = ""
            }

// condition for resolution smaller than 700px
   } else {
        if (event.path[1][0].value.match(emailValid)){
            errorMobile.classList.remove("visibleMobile")
            inputEmail.style.border = ""
        } else {
            inputEmail.style.border = "2px solid red"
            errorMobile.classList.add("visibleMobile")
            errorMobile.append(paragraph)
            paragraph = ""
        }

   }
// form reset after click on submit btn and sending an email   
   formInput.reset()
   
   
   
})