function check() {

    // stored data from the register-form
    var storedname = localStorage.getItem('users');
    var J= JSON.parse(storedname);

    

    // entered data from the login-form
    var userEmail = document.getElementById('email');
    var userPw = document.getElementById('password');


    console.log(userEmail);
    console.log(userPw);
    J.forEach(user => {
        console.log(user.Email);
        console.log(user.password1);
      // check if stored data from register-form is equal to data from login form
    if(userEmail.value != user.Email || userPw.value != user.password1) {
      alert('ERROR');
  }else {
      alert('You are loged in.');
  }

      
    });

    
}