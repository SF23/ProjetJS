function recherche(){
    let search = document.getElementById("cathegory").value;
     // console.log(search);
    let fill = z.filter(x => (x.name).startsWith(search));
    // console.log(fill);
}

function recherche1(){
var watch = document.getElementById("watch").value;
let fill = z.filter(x => (x.watch).startsWith(search));
}


function recherche2(){
var watch = document.getElementById("mobile").value;
let fill = z.filter(x => (x.watch).startsWith(search));
}


function recherche3(){
var watch = document.getElementById("kid").value;
let fill = z.filter(x => (x.watch).startsWith(search));
}