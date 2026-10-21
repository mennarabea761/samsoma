// Get all screens
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const thirdScreen = document.getElementById("thirdScreen");

// Get buttons
const openInvitation = document.getElementById("openInvitation");
const openLetter = document.getElementById("openLetter");
const startAgain = document.getElementById("startAgain");


// Function to show a specific screen
function showScreen(screenToShow) {

    // Hide all screens
    firstScreen.classList.remove("active");
    secondScreen.classList.remove("active");
    thirdScreen.classList.remove("active");

    // Show the selected screen
    screenToShow.classList.add("active");

    // Return to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Open the invitation
openInvitation.addEventListener("click", function () {

    showScreen(secondScreen);

});


// Open the personal letter
openLetter.addEventListener("click", function () {

    showScreen(thirdScreen);

});


// Start again from the beginning
startAgain.addEventListener("click", function () {

    showScreen(firstScreen);

});