function validate(){
var Username = document.getElementsByName('username').nodeValue;
var Password = document.getElementById('password').nodeValue;
var form = document.getElementById('form');
var errorElement = document.getElementById('error')

form.addEventListener("button" , () => {
   alert("hi");
    if (Username.value == '' || Username.value==null){
        alert("Username is required");
    }
   
})

}