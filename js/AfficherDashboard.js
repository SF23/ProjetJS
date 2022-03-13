
var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);

// const el = document.querySelector("tableBody");
window.addEventListener("load", AfficherDashboard);

function AfficherDashboard() {
  let hello=``;
  data.forEach(x => {
  hello += `<tr id=${x.id}>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm" contentEditable="true">${x.name}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0" contentEditable="true">${x.category}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-xs text-secondary mb-0" contentEditable="true">${x.description}</p>
              </td>
              <td class="align-middle">
                <button class="btn bg-gradient-success w-30 mb-0 toast-btn" type="button" onclick="ModifierDashboard(this)">Modifier</button>
                <button class="btn bg-gradient-danger w-30 mb-0 toast-btn" type="button" onclick="SupprimerProduit(this)">Supprimer</button>
              </td>
            </tr>`
        });
  document.getElementById("tableBody").innerHTML= hello;
}

function Add(){
  // Recuperer les valeurs name, email, etc. depuis la form
  // A faire

  // Recuperer le tableau
  let name = document.getElementById("name").value;
  console.log();
  let category = document.getElementById("category").value;
  console.log();
  let description = document.getElementById("description").value;
  console.log();

  // Generer un nouveau id pour le nouvel utilisateur
  let id = Math.floor(Math.random() * 100);

  // Creation du nouvel objet User
  let Produit = {
      id: id,
      name : name ,
      category: category, 
      description: description
  };

  // Ajout du User dans le tableau du localStorage
  data.push(Produit);
  storage = JSON.stringify(data);
  localStorage.setItem("Produits", storage);
}
