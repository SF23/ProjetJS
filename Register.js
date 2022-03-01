let array= JSON.parse(localStorage.getItem("users")) || [];

function ajout(){
  
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  

  


  // let user={ FirstName : "admin"  , LastName : "admin", Email:"admin@admin.com" , Password:"admin", Role: "admin" }
  let user={ FirstName : firstname  , LastName : lastname , Email:email , Password:password , Role: "user"}
  // console.log(user);
  array.push(user);
  console.log(array);
  localStorage.setItem("users",JSON.stringify(array));
  window.location.replace('login.html')

}