
var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);



function ModifDashbord(product) {
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

   affichage2();
}