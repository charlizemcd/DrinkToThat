document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    document.getElementById("customForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const player1Name = document.getElementById("player1").value.trim();
        const player2Name = document.getElementById("player2").value.trim();
        const player3Name = document.getElementById("player3").value.trim();
        const player4Name = document.getElementById("player4").value.trim();
        const player5Name = document.getElementById("player5").value.trim();
        const player6Name = document.getElementById("player6").value.trim();

        // Validate that at least one required player name is provided
        if (!player1Name && !player2Name) {
            alert("Please provide names for at least 2 players.");
            return;
        }

        // Optional: Add additional validation if needed for other required fields

        // Add player names to localStorage
        localStorage.setItem("player1", player1Name);
        localStorage.setItem("player2", player2Name);
        localStorage.setItem("player3", player3Name);
        localStorage.setItem("player4", player4Name);
        localStorage.setItem("player5", player5Name);
        localStorage.setItem("player6", player6Name);

        // Redirect to the game page
        window.location.href = "names.html";
    });
});
