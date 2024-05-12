document.addEventListener("DOMContentLoaded", function() {
    var loadingPopup = document.getElementById("loading-popup");
    loadingPopup.style.display = "flex"; 

    setTimeout(function() {
        loadingPopup.style.display = "none"; 
    }, 1000); 
});

