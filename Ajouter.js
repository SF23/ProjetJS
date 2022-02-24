function add(){
    let x = document.getElementById("Task").value;
    let y = document.getElementById("Discription").value;
    let c=Math.floor(Math.random()* 100);
    let Task={id:c,name:x,discrip:y}
    z.push(Task);
    localStorage.setItem("Tasks",JSON.stringify(z));
    window.open('test.html', '_blank');
}