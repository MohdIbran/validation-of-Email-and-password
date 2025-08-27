let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit",function(dets) {
   dets.preventDefault();
   
   
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
   let checkmail = emailRegex.test(email.value);
   let checkpassword = passwordRegex.test(password.value);
   let output = true;
   if (!checkmail) {
      let a=document.querySelector("#emailerror");
      a.style.display = "initial";
      output = false;
      
   }
   if (!checkpassword) {
      let b= document.querySelector("#passworderror");
      b.style.display = "initial";
      output = false;
      
   }
   if (output) {
      let n = document.querySelector("#output");
      n.style.display = "initial";
      
   }



   

})
