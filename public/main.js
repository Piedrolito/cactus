function popupRuleOpen(){
    let pop = document.getElementById("popup");
    let body = document.getElementsByTagName("BODY")[0];
    pop.classList.replace("popup-close", "popup-open");
    body.classList.add("overlay");
}

function popupRuleClose(){
    let pop = document.getElementById("popup");
    let body = document.getElementsByTagName("BODY")[0];
    pop.classList.replace("popup-open", "popup-close");
    body.classList.remove("overlay");
}