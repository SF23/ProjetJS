
var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);




// const el = document.querySelector("tableBody");
window.addEventListener("load", AjouterDashbord);


function AjouterDashbord()
{


let hello=``;
let i=1;
data.forEach(x => {
hello += `<tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                         
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${x.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">${x.cathegory}</p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <p class="text-xs text-secondary mb-0">${x.description}</p>
                      </td>
                      <td class="align-middle">
                        <button class="btn bg-gradient-success w-30 mb-0 toast-btn" type="button">Modifier</button>
                        <button class="btn bg-gradient-danger w-30 mb-0 toast-btn" type="button" >Supprimer</button>
                      </td>
                    </tr>`

                  i++;
                });
                document.getElementById("tableBody").innerHTML= hello  
              }
            