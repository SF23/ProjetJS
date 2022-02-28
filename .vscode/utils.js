var p =localStorage.getItem("Tasks") || [];
let id;
var z = JSON.parse(p);

const authors_table_id = "authors_table";

function affichage(){
    console.log(p);
    console.log(typeof p);
    console.log(z);
    console.log(typeof z);
    let tablebody = ``;
    let i=1;
    p.forEach(x => {
        tablebody += fillrow(x);
    });

    document.getElementById('authors_table').children[1].innerHTML = tablebody;
}

function add(){
    // Recuperer les valeurs name, email, etc. depuis la form
    // A faire

    // Recuperer le tableau
    let NAme = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let Job = document.getElementById("Job").value;
    let Employer = document.getElementById("Employer").value;
    let Statue = document.getElementById("Statue").value;
    let Start_date = document.getElementById("Start_date").value;

    // Generer un nouveau id pour le nouvel utilisateur
    let c=Math.floor(Math.random()* 100);

    // Creation du nouvel objet User
    let User = {a  : Name , b : Email , c : Job , d : Employer , e : Statue , f : Start_date}

    // Ajout du User dans le tableau du localStorage
    z.push(User);
    localStorage.setItem("User",JSON.stringify(z));
    // window.open('test.html', '_blank');

    affichage();
}

function showUserForm() {
    // html

    
    // 1. afficher le popup ajout utilisateur
    // document.getElementById("myForm").style.display = "block";

    // Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('myForm').submit();
    alert("Form Submitted Successfully...");
    }
    }
    //Function To Display Popup
    function div_show() {
    document.getElementById('myForm').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('myForm').style.display = "none";
    }
    
}

function deleteitem(x){
    console.log(x);
    z.splice(x,1);
    console.log(z);
    localStorage.setItem("Tasks",JSON.stringify(z));

    affichage();
}

function updateitem(a) {
    // console.log(z);
   let update= z.find(x =>x.id ==a);
   document.getElementById("Task").value=update.name
   document.getElementById("Discription").value=update.discrip;
   console.log(update);
   id=a;

   affichage();
}

function save(){
    console.log(id);
    let update= z.find(x =>x.id == id );
     update.name = document.getElementById("Task").value;
     update.discrip = document.getElementById("Discription").value;
    // console.log(update.name);
    // console.log(update.discrip);
    console.log(update);
    // z.splice(b-1,b);
    // z.splice(b-1,0,update);
    console.log(z);
    localStorage.setItem("Tasks",JSON.stringify(z));
    window.location.reload()
}

function recherche(){
    let search = document.getElementById("recherche").value;
    // console.log(search);
    let fill = z.filter(x => (x.name).startsWith(search));
    // console.log(fill);

    let hello=``;
        let i=1;
    fill.forEach(x => {
        hello += `<tr>
        <th scope="row">${i}</th>
        <td>${x.name}</td>
        <td>${x.discrip}</td>
        <td><button onclick="updateitem(${x.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
        <td><button onclick="deleteitem(${x.id})" class="btn btn-danger btn-lg">Delete</button></td>
        </tr>
           
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card" style="width: 18rem; margin: 100px auto; background-color: grey;">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="text" class="form-control" id="Task">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="Discription" rows="3" placeholder="Discription"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="save(${x.id})">Save changes</button>
            </div>
          </div>
        </div>
    </div>`

        i++;
    });
    document.getElementById("body").innerHTML= hello 
}

function fillrow(user) {
    return     `<tr>
                    <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                        <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">${user.name}</h6>
                        <p class="text-xs text-secondary mb-0">${user.email}</p>
                        </div>
                    </div>
                    </td>
                    <td>
                    <p class="text-xs font-weight-bold mb-0">${user.job}</p>
                    <p class="text-xs text-secondary mb-0">${user.employer}</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">${user.status}</span>
                    </td>
                    <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">${user.start_date}</span>
                    </td>
        
                    <td>
                        <button onclick="updateitem(${user.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    </td>
                    <td>
                        <button onclick="deleteitem(${user.id})" class="btn btn-danger btn-lg">Delete</button>
                    </td>
                </tr>`;                
}
