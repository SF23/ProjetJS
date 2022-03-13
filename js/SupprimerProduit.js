var storage = localStorage.getItem("Produits") || [];

var data = JSON.parse(storage);

function SupprimerProduit(button) {
    const row = button.parentNode.parentNode;
    const productId = row.getAttribute('id');
    console.log('productId = ' + productId);

    data = data.filter(produit => produit.id != productId);

    localStorage.setItem('Produits', JSON.stringify(data));

    AfficherDashboard();
}
