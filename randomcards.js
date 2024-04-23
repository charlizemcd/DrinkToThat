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
}