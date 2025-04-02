function loaderAni(act){
    switch(act){
        case "show":
            document.getElementById("loader-ani").style.display = "block";    
        break;
        case "hide":
            document.getElementById("loader-ani").style.display = "none";
        break;
    }
}