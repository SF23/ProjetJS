function deleteitem(x){
    console.log(x);
    z.splice(x,1);
    console.log(z);
    localStorage.setItem("Tasks",JSON.stringify(z));
    affichage()
}