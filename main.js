var coursesButton = document.querySelector('.courses-js');
var collectionsButton = document.querySelector('.collections-js');
var wishlistButton = document.querySelector('.wishlist-js');
var archivedButton = document.querySelector('.archived-js')
var navButton = document.querySelectorAll('.nav-option');

coursesButton.addEventListener('click', selectButton);
collectionsButton.addEventListener('click', selectButton);
wishlistButton.addEventListener('click', selectButton);
archivedButton.addEventListener('click', selectButton);

function selectButton() {
  console.log("fun")
  event.target.classList.add('active')
}
