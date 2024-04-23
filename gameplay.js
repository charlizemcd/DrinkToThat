document.addEventListener("DOMContentLoaded", function() {
    const player1PointsDisplay = document.getElementById("player1Points");
    const addPointBtn = document.getElementById("addPointBtn");

    let player1Points = 0;

    addPointBtn.addEventListener("click", function() {
        player1Points++;
        player1PointsDisplay.textContent = player1Points;
    });
});
