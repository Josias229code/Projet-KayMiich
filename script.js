let activeButton = null; // Stocke le bouton qui a ouvert le panneau

function contactForm(button) {
    let contact = document.querySelector("#contact");

    contact.classList.add("active"); // Slide-in
    button.disabled = true; // Désactiver le bouton cliqué
    activeButton = button; // Mémoriser le bouton désactivé
}

// Fonction pour fermer le panneau et réactiver le bouton désactivé
function closeContact() {
    let contact = document.querySelector("#contact");

    contact.classList.remove("active"); // Slide-out

    // Réactiver le bouton qui a ouvert le panneau
    if (activeButton) {
        activeButton.disabled = false;
        activeButton = null;
    }
}

// Ajouter l'événement au bouton "Close"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("closeBtn").addEventListener("click", closeContact);
});
