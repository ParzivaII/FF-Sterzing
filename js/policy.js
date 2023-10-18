document.addEventListener("DOMContentLoaded", function() {
    const privacyBanner = document.getElementById("privacy-banner");
    const acceptButton = document.getElementById("accept-button");

    // Check if the user has previously accepted the privacy policy
    const privacyAccepted = localStorage.getItem("privacyAccepted");

    if (!privacyAccepted) {
        privacyBanner.classList.remove("hidden");
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("privacyAccepted", "true");
        privacyBanner.classList.add("hidden");
    });
});