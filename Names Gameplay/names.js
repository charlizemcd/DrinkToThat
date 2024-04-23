const players = [];
let currentPlayerIndex = 0; // Initialize the current player index to 0 (first player)

// Function to add a player
function addPlayer(playerName) {
  players.push({ name: playerName, score: 0 });
}

// Function to initialize the game with custom player names
function initializeGame() {
  // Clear the existing players array
  players.length = 0;

  // Get player names from localStorage and add them to the players array
  for (let i = 1; i <= 6; i++) {
    const playerName = localStorage.getItem("player" + i);
    if (playerName) {
      addPlayer(playerName);
    }
  }

  // Update the UI
  updatePlayersUI();
  updateButtonsUI();

  // Display the current player's name
  displayCurrentPlayer();
}

// Function to display the current player's name
function displayCurrentPlayer() {
  const currentPlayerName = players[currentPlayerIndex].name;
  document.getElementById("currentPlayer").textContent = `${currentPlayerName}. . .`;
}

// Function to switch to the next player's turn
function nextPlayer() {
  // Increment the current player index
  currentPlayerIndex++;
  // If the index exceeds the number of players, wrap around to the first player
  if (currentPlayerIndex >= players.length) {
    currentPlayerIndex = 0;
  }
  // Display the current player's name
  displayCurrentPlayer();
}

// Function to update the players UI
function updatePlayersUI() {
  const playersDiv = document.getElementById("players");
  playersDiv.innerHTML = "";
  players.forEach(player => {
    const playerElement = document.createElement("div");
    playerElement.textContent = `${player.name} - Score: ${player.score}`;
    playersDiv.appendChild(playerElement);
  });
}

// Function to update the buttons UI
function updateButtonsUI() {
  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";
  players.forEach(player => {
    const button = document.createElement("button");
    button.textContent = player.name;
    button.classList.add("player-button");
    button.onclick = () => {
      if (button.classList.contains("active")) {
        player.score--;
        button.classList.remove("active");
      } else {
        player.score++;
        button.classList.add("active");
      }
      updatePlayersUI();
    };
    buttonsDiv.appendChild(button);
  });
}


// Define the array of images
const images = [
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-2.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-3.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-4.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-5.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-6.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-7.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-8.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-9.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-10.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-11.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-12.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-13.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-14.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-15.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-16.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-17.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-18.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-19.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-20.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-21.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-22.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-23.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-24.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-25.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-26.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-27.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-28.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/general/general-29.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-1.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-2.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-4.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-5.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-6.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/NSFW/NSFW-7.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/voting/voting-1.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/voting/voting-2.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/voting/voting-3.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/voting/voting-4.png',
    '/Users/user/Downloads/Drink To That HTML 1/assets/voting/voting-5.png'
    // Add more image URLs as needed
];

// Preload images
const imageObjects = [];
images.forEach(url => {
    const img = new Image();
    img.src = url;
    imageObjects.push(img);
});

// Shuffle function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize an index variable to keep track of the current image
let currentIndex = 0;

// Shuffle the array initially
shuffle(images);

// Function to display a random image
function randomImage() {
    // Get the image element
    const imageElement = document.getElementById('displayedImage');

    // Set the src attribute to display the current image
    imageElement.src = images[currentIndex];

    // Increment the index
    currentIndex++;

    // If we reach the end of the array, shuffle it again
    if (currentIndex >= images.length) {
        shuffle(images);
        currentIndex = 0; // Reset the index
    }

    // Call nextPlayer() to advance to the next player
    nextPlayer();

    // Remove the 'active' class from all player buttons
    document.querySelectorAll(".player-button").forEach(btn => {
        btn.classList.remove("active");
    });
}

function skipImage() {
  // Get the image element
  const imageElement = document.getElementById('displayedImage');

  // Set the src attribute to display the current image
  imageElement.src = images[currentIndex];

  // Increment the index
  currentIndex++;

  // Remove the 'active' class from all player buttons
  document.querySelectorAll(".player-button").forEach(btn => {
      btn.classList.remove("active");
  });
}

  

// Initialize the game
initializeGame(
    // Function to initialize the game with custom player names
function initializeGame() {
    // Get player names from localStorage
    const player1Name = localStorage.getItem("player1");
    const player2Name = localStorage.getItem("player2");
    const player3Name = localStorage.getItem("player3");
    const player4Name = localStorage.getItem("player4");
    const player5Name = localStorage.getItem("player5");
    const player6Name = localStorage.getItem("player6");
  
    // Add players with custom names
    addPlayer(player1Name);
    addPlayer(player2Name);
    addPlayer(player3Name);
    addPlayer(player4Name);
    addPlayer(player5Name);
    addPlayer(player6Name);
  
    // Update the UI
    updatePlayersUI();
    updateButtonsUI();
  }
  
);

