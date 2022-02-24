function updateitem(a) {
    // console.log(z);
   let update= z.find(x =>x.id ==a);
   document.getElementById("Task").value=update.name
   document.getElementById("Discription").value=update.discrip;
   console.log(update);
   id=a;
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