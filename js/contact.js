 let array= JSON.parse(localStorage.getItem("contact")) || [];
      function ajout(){
        let name = document.getElementById("name").value;
        let subject = document.getElementById("subject").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;
        
        
      
      
        let user={ Name:name ,Subject: subject,Email:email, Phone : phone   , Message:message }
        // console.log(user);
        array.push(user);
        localStorage.setItem("contact",JSON.stringify(array));
       let users = localStorage.getItem("contact");
      
      
      }