// Get the elements
const popup = document.querySelector('.popup');
const webpage = document.querySelector('main');

// Function to apply the blur effect
function applyBlurEffect() {
  webpage.classList.add('blur-effect');
}

// Function to remove the blur effect
function removeBlurEffect() {
  webpage.classList.remove('blur-effect');
}

// Show the popup and apply the blur effect
popup.style.visibility = 'visible';
popup.style.opacity = '1';
applyBlurEffect();

// Delay the removal of the blur effect after 5 seconds
setTimeout(function() {
  removeBlurEffect();
}, 3000);
// Get the image element
const popImage = document.querySelector('.pop-img img');

// Function to hide the image after 5 seconds
function hideImage() {
    setTimeout(function() {
        popImage.style.opacity = '0';
    }, 3000);
}

// Call the function to hide the image after 5 seconds
hideImage();