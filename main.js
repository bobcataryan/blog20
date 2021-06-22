images=["dad.png","mom.jpeg","me.jpeg","brother.jpeg"];
names=["Niraj Goel","Pallavi Goel", "Aryan Goel", "Nivaan Goel"];
i=0;
add="yes"
function start(){
document.getElementById("picture").src=images[i];
document.getElementById("name").innerHTML=names[i];
console.log("screen uploaded");
}
function next(){
    if (add=="yes"){
    i=i+1;
    }
    else{
        add="yes"
    }
    console.log(i);
    document.getElementById("picture").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    if(i==3){
        i=0;
        add="no"
    }
}
