let array= JSON.parse(localStorage.getItem("users")) || [];

function ajout(){
  
  let email = document.getElementById("email").value;
  let edress = document.getElementById("adress").value;
  let adress2 = document.getElementById("adress2").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;

  



  let user={ Email:email , Password:password ,  Adress : adress ,  Adress2 : adress2 , City : city , State : state , Zip : zip }
  // console.log(user);
  array.push(user);
  console.log(array);
  localStorage.setItem("users",JSON.stringify(array));
 let users = localStorage.getItem("users");
  console.log(users);


}