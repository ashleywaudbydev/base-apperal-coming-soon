//----------EVENT LISTENER ON THE BUTTON-----------\\
submitButton = document.querySelector(".btn").addEventListener("click", function(e){
e.preventDefault()
const emailField = document.querySelector(".email");
validateEmail(emailField)
})

//----------VALIDATE EMAIL FUNCTION-----------\\
function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const inputDiv = document.querySelector(".form-control");
  const small = document.querySelector(".small");
  const circle = document.querySelector(".circle");
  const button = document.querySelector(".btn");
  
  //----------IF STATEMENT FOR THE VALIDATION OF THE EMAIL INPUT-----------\\
  if (reg.test(emailField.value) == false) 
  {
    
      inputDiv.classList.add("error")
      small.classList.add("text-error")
      small.innerHTML = "Please provide a valid email"
      circle.classList.add("error-circle-add")
      button.classList.add("error-button")
  }else{
      inputDiv.classList.remove("error")
      small.classList.remove("text-error")
      circle.classList.remove("error-circle-add")
      small.innerHTML = ""
      location.reload();
    
  }
}





