var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);


function ModifierDashboard(button) {
    // TODO
    // Add form in the html
    // update the localStorage regarding the form input
    //const productsTable = document.getElementById('products_table');
    const row = button.parentNode.parentNode;
    const productId = row.getAttribute('id');
    console.log('productId = ' + productId);

    const productToUpdateIndex = data.findIndex((item) => item.id == productId);

    if (productToUpdateIndex < 0) {
        return;
    }

    const productName = row.firstElementChild.childNodes[1].childNodes[1].childNodes[1].innerHTML;
    const productCategory = row.childNodes[3].childNodes[1].innerHTML;
    const productDescription = row.childNodes[5].childNodes[1].innerHTML;
    
    const product = {
        id: productId,
        name: productName,
        category: productCategory,
        description: productDescription
    };

    data[productToUpdateIndex] = product;

    localStorage.setItem('Produits', JSON.stringify(data));

    AfficherDashboard();
}