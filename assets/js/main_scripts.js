function initialSetup() {
    if (!getUserName()) {
        modal.style.display = "block";
    } else {
        updateWelcomeMessage();
    }
    openChecklist(); // Open the checklist automatically when the page loads
}

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

function showNextStep(step) {
    // Hide all steps
    var steps = document.getElementsByClassName('step');
    for (var i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }

    // Show the next step
    if(step === 'flow-map') {
        document.getElementById('flow-map-section').style.display = 'block';
    } else {
        var nextStep = 'step' + step;
        document.getElementById(nextStep).style.display = 'block';
    }
}

function showPreviousStep(step) {
    document.getElementById('flow-map-section').style.display = 'none';
    // Hide the current step
    var currentStep = document.getElementById('step' + (step + 1));
    if (currentStep) {
      currentStep.style.display = 'none';
    }
  
    // Show the previous step
    var prevStep = document.getElementById('step' + step);
    if (prevStep) {
      prevStep.style.display = 'block';
    }
  }


function checkChecklist() {
    // Get all checkbox items within the pop-up
    var items = document.querySelectorAll("#checklistPopup .checklist-items input[type='checkbox']");
    var allChecked = true;

    // Check if all checkboxes are checked
    items.forEach(function(item) {
        if (!item.checked) {
            allChecked = false;
        }
    });

    // If all checkboxes are checked, close the pop-up
    if (allChecked) {
        closeChecklist();
    }
}

window.onload = function() {
    // Open the checklist automatically when the page loads
    openChecklist();
};

function openChecklist() {
    document.getElementById("checklistPopup").style.display = "block";
}

function closeChecklist() {
    document.getElementById("checklistPopup").style.display = "none";
}

window.onload = initialSetup;
