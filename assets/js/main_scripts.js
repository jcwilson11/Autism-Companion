// Modal logic
let modal = document.getElementById("nameModal");

// Check if the user's name is saved
function getUserName() {
    return localStorage.getItem("userName");
}

// Display the modal if the user's name is not saved
if (!getUserName()) {
    modal.style.display = "block";
} else {
    modal.style.display = "none";
}

// Save the user's name and close the modal
function saveName() {
    let userName = document.getElementById("userName").value;
    if (userName) {
        localStorage.setItem("userName", userName);
        modal.style.display = "none";
        updateWelcomeMessage();
    }
}

// Close the modal without saving the name
function closeModal() {
    modal.style.display = "none";
}

// Update the welcome message
function updateWelcomeMessage() {
    let userName = getUserName();
    if (userName) {
        document.getElementById("welcomeMessage").innerText = "Welcome, " + userName + "!";
    }
}

// Show the modal to change the name
function showChangeNameModal() {
    modal.style.display = "block";
}

// Initialize the page
window.onload = function() {
    updateWelcomeMessage();
}

// Attach saveName function to your save button
document.getElementById("saveButton").addEventListener("click", saveName);

// Attach closeModal function to your close button (if you have one)
document.getElementById("closeButton").addEventListener("click", closeModal);

// Attach showChangeNameModal function to the change name button
document.getElementById("changeNameButton").addEventListener("click", showChangeNameModal);
