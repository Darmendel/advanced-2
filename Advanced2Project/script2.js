function validication() {

  
    var username=document.getElementById("user").value;
    var nickn=document.getElementById("nickname").value;
    var psw=document.getElementById("password").value;
        let user = document.getElementById('user');
        let pass = document.getElementById('password');
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

        if (user.value.length <= 8 && user.value.length >= 2) {} else {
            alert("Username has to be between 2-8 characters.")
        }
        if (pass.value.length <= 8 && pass.value.length >= 2) {} else {
            alert("Password has to be between 2-8 characters.")
        }
      
        if(user_records.some((v)=>{return v.user==user.value}))
        {
            alert('The user already exist')
        }
        else if((user.value!="")|| (pass.value!="")){
          user_records.push({
            "user":username,
            "nickname":nickn,
            "password":psw
            
          })
        localStorage.setItem("users",JSON.stringify(user_records)); 
        }

          //if username and password don't contains error class that mean user filled details properly
        if(username.validication=true){
        window.location.href = "Login.html"; 
  }
}
