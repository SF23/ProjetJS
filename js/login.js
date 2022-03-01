function login() {

    // stored data from the register-form
    var storedname = localStorage.getItem('users');
    var J= JSON.parse(storedname);

    

    // entered data from the login-form
    var userEmail = document.getElementById('email').value;
    var userPw = document.getElementById('password').value;


    console.log(userEmail);
    console.log(userPw);
    J.forEach(element => {
      console.log(element.Email);
      console.log(element.Password);
    });
    let userc = J.find(x =>(x.Email == userEmail) && (x.Password == userPw))

    if (userc != []) {
      localStorage.setItem("userConecté",userc)
      if(userc.Role == "admin"){
        window.location.replace('')
      }else{
        window.location.replace('')
      }
    } else {
      alert('please check yr email and yr password')
    }
      

    
}