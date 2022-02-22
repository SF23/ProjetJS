 let array=[];
      function ajout(){
        let Name = document.getElementById("name").value;
        let Subject = document.getElementById("subject").value;
        let Email = document.getElementById("email").value;
        let Phone = document.getElementById("phone").value;
        let Message = document.getElementById("message").value;
        let YMessage = document.getElementById("ymessage").value;
        
      
        console.log("fName : ", fName);
        console.log("lName : ", lName);
        console.log("email : ", email);
        console.log("uName : ", uName);
        console.log("city : ", city);
        console.log("state : ", state);
        console.log("zip : ", zip);
        console.log("check : ", check);
        console.log("pw1 : ", pw1);
        console.log("pw2 : ", pw2);
      
        let user={ Name:name ,Subject: subject,Email:email, Phone : phone   , Message:message , YMessage:message}
        // console.log(user);
        array.push(user);
        console.log(array);
        localStorage.setItem("users",JSON.stringify(array));
       let users = localStorage.getItem("users");
        console.log(users);
      
      
      }