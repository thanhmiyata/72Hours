document.addEventListener("DOMContentLoaded", function() {
    let closeIcon = document.querySelector("#close-btn .Icon");
    
    if (closeIcon) {
        closeIcon.addEventListener("click", function() {
            let banner = document.getElementById("Banner7");
            if (banner) {
                banner.style.display = "none";
            }
        });
    } else {
        console.log("Close icon not found");
    }
});