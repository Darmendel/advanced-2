const form = document.querySelector("form");
username = form.querySelector(".user"),
eInput = username.querySelector("input"),
pass = form.querySelector(".password"),
pInput = pass.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if user/pass are not valid -> do the shake and error message
  (eInput.value == "") ? username.classList.add("shake", "error") : user_func();
  (pInput.value == "") ? pass.classList.add("shake", "error") : pass_func();

  setTimeout(()=>{ //remove shake class after 500ms
    username.classList.remove("shake");
    pass.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{user_func();} //calling function
  pInput.onkeyup = ()=>{pass_func();} //calling function

  function user_func(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    //pattern :
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      username.classList.add("error");
      username.classList.remove("valid");
      let errorTxt = username.querySelector(".error-txt");
      //if user value is not empty then show please enter valid user else show user is not valid
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid username" : errorTxt.innerText = "User is not valid";
    }else{ //if pattern matched then remove error and add valid class
      username.classList.remove("error");
      username.classList.add("valid");
    }
  }

  function pass_func(){ 
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pass.classList.add("error");
      pass.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pass.classList.remove("error");
      pass.classList.add("valid");
    }
  }

  function validacija() {

    let user = document.getElementById('user');
    let listOptions = document.querySelectorAll("#list option");
  
  
    if (user.value.length <= 8 && user.value.length >= 3) {} else {
      alert("Username has to be between 3-8 characters.")
    }
  
    for (let i = 0; i < listOptions.length; i++) {
      if (listOptions[i].value === user.value) {
        alert('The name already exist')
      }
    }
    return false;
  }

  //if username and password don't contains error class that mean user filled details properly
  if(!username.classList.contains("error") && !pass.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}