
function validation(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
     // User Name
    if(user == ""){
        document.getElementById('username').innerHTML = "* Please fill the username field *";
        return false;
    }
    if((user.length<=2) || (user.length > 25)){
        document.getElementById('username').innerHTML = "*User name length must be between 2 to 25";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML = "*Only characters are allowed";
        return false;
    }


    // //Password

    // if((pass.length<=8) || (pass.length > 25)){
    //     document.getElementById('password').innerHTML = "*Password length must be between 8 to 50";
    //     return false;
    // }
    //
   if(pass == ""){
        document.getElementById('password').innerHTML ="* Please fill the Password field *";
        return false;
    }
    if (pass.length < 8) {
        document.getElementById('password').innerHTML = "*Your password must be at least 8 characters";
        return false;
    }
    if (pass.search(/[a-z]/i) < 0) {
        document.getElementById('password').innerHTML = "*Your password must contain at least one letter";
        return false;
    }
    if (pass.search(/[0-9]/) < 0) {
         document.getElementById('password').innerHTML = "*Your password must contain at least one digit";
        return false;
    }

      // Confirm Password
      if(cpass == ""){
        document.getElementById('Conpass').innerHTML ="* Please fill the Password field *";
        return false;
    }
        if(pass!=cpass){
        document.getElementById('password').innerHTML ="Password don't match";
        return false;
    }



      // Mobile Number
      if(number == ""){
        document.getElementById('mobile_number').innerHTML ="* Please fill the Mobile Number field *";
        return false;
    }
      if(isNaN(number)){
          document.getElementById('mobile_number').innerHTML ="* User must enter digit only.*";
        return false;
      }
      if(number.length!=11){
           document.getElementById('mobile_number').innerHTML ="* Please Enter Correct number.*";
        return false;
      }


      //Email
       if(email == ""){
        document.getElementById('emailAddress').innerHTML ="* Please fill the Email Address field *";
        return false;
    }
       if(email.indexOf('@') <= 0){
           document.getElementById('emailAddress').innerHTML ="*  '@' position is invalid *";
        return false;
       }
       if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
            document.getElementById('emailAddress').innerHTML ="*  '.' position is invalid *";
        return false;

       }
   location.href="login.html";
}
