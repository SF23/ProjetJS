var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);



// //function affichage(){
 


/*
//         let hello=``;
//         let i=1;
//     storage.forEach(x => {
//         hello += 
//       `<div class="card" style="width: 18rem;">
//        <img src="..." class="card-img-top" alt="...">
//        <div class="card-body">
//        <h5 class="card-title">${x.name }</h5>
//        <p class="card-text">${x.cathegorie}</p>
//        <p class="card-text">${x.description}}</p>
//        <button type="button" class="btn btn-primary" onclick="save(${x.id})">Save</button>
//        </div>
//        </div>`

//         i++;
//     });
    // document.getElementById("body").innerHTML= hello  

    // document.getElementById('products_table').innerHTML = buildTableHtml();
//}



// function affichage2(){
//     let hello=``;
//     let i=1;
// z.forEach(x => {
//     hello += `<tr>
//     <th scope="row">${i}</th>
//     <td>${x.CompanyName}</td>
//     <td>${x.Adress}</td>
//     <td>${x.Email}</td>
//     <td><button onclick="updateitem(${x.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
//     <td><button onclick="deleteitem(${i-1})" class="btn btn-danger btn-lg">Delete</button></td>
//     </tr>
       
//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             <div class="card" style="width: 18rem; margin: 100px auto; background-color: grey;">
//                 <div class="card-body">
//                     <div class="mb-3">
//                         <label for="exampleFormControlInput1" class="form-label">CopanyName</label>
//                         <input type="text" class="form-control" id="companyname">
//                     </div>
//                     <div class="mb-3">
//                     <label for="exampleFormControlInput1" class="form-label">Adress</label>
//                     <input type="text" class="form-control" id="adress">
//                 </div>
//                 <div class="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">E mail</label>
//                 <input type="text" class="form-control" id="email">
//             </div>
                   
//                 </div>
//             </div>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary" onclick="save(${x.id})">Save changes</button>
//         </div>
//       </div>
//     </div>
// </div>`

//     i++;
// });
// document.getElementById("body").innerHTML= hello    
// }
 */


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

function deleteitem(id){
    data = data.filter(item => item.id !== id);
    storage = JSON.stringify(data);

    localStorage.setItem('Produits', storage);

    affichage();
}

function updateitem(product) {
    // TODO
    // Add form in the html
    // update the localStorage regarding the form input

    let itemToUpdateIndex = data.findIndex((item) => item.id == id);

    data[itemToUpdateIndex] = product;

    storage = JSON();
    let itemToUpdate = data[itemToUpdateIndex];

    // itemToUpdate.name = ;
    data[itemToUpdateIndex]
   
   document.getElementById("name").value=update.name
   document.getElementById("cathegory").value=update.cathegory;
   document.getElementById("discription").value=update.discription;
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

function fillrow(product) {    
    return     `<tr>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">${product.name}</p>
                    </td>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">${product.category}</p>
                    </td>
                    <td>
                        <p class="text-xs font-weight-bold mb-0">${product.description}</p>
                    </td>
                    
                    <td>
                        <button class="btn bg-gradient-success w-30 mb-0 toast-btn" type="button" onclick="update(${product.id})">Update</button>
                    <td>
                    <button class="btn bg-gradient-success w-30 mb-0 toast-btn" type="button" onclick="deleteitem(${product.id})">Delete</button>
                    </td>
                </tr>`;
}

function getTableHeader() {
    return `<thead>
                <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                    <th class="text-secondary opacity-7"></th>
                </tr>
            </thead>`;
}

function buildTableHtml() {
    // Add header <thead>
    let html = getTableHeader();

    // Open tbody
    html += '<tbody>'
    
    // for each product : Add product row
    data.forEach(product => {
        html += fillrow(product);
    });

    // Close tbody
    html += '</tbody>'

    return html;
}


