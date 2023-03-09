document.getElementById("btnCorinthians").onclick=function(){
    redirectTo("corinthians");
}
document.getElementById("btnPalmeiras").onclick=function(){
    redirectTo("palmeiras");
}
document.getElementById("btnManutd").onclick=function(){
    redirectTo("man.utd");
}
document.getElementById("btnMancity").onclick=function(){
    redirectTo("man.city");
}
document.getElementById("btnRealmadrid").onclick=function(){
    redirectTo("realmadrid");
}
document.getElementById("btnPSG").onclick=function(){
    redirectTo("psg");
}
function redirectTo(pageName){
    if(pageName == "corinthians"){
        alert("vai corinthians");
    }
    else{
        alert("seja bem-vindo " +pageName);
    }
    

    window.location="./pages/" +pageName+".html";  
}

