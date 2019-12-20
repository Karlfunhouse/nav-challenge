var coursesButton = document.querySelector('.courses-js');
var collectionsButton = document.querySelector('.collections-js');
var wishlistButton = document.querySelector('.wishlist-js');
var archivedButton = document.querySelector('.archived-js')
var navButton = document.querySelectorAll('.nav-option');
// var mainDisplay = document.getElementById('display').innerHTML=`<p>fun</p>`

coursesButton.addEventListener('click', selectCourses);
collectionsButton.addEventListener('click', selectCollections);
wishlistButton.addEventListener('click', selectWishlist);
archivedButton.addEventListener('click', selectArchived);


// function selectButton() {
//   event.target.classList.add('active');


function selectCourses() {
  var mainDisplay = document.getElementById('display').innerHTML=`<p>Courses</p>`
  if (event.target.classList.contains('active')) {
    console.log('active')
  } else {
    coursesButton.classList.add('active');
    collectionsButton.classList.remove('active');
    wishlistButton.classList.remove('active');
    archivedButton.classList.remove('active');
    mainDisplay
  }
}

function selectCollections() {
  var mainDisplay = document.getElementById('display').innerHTML=`<p>Collections</p>`
  if (event.target.classList.contains('active')) {
    console.log('active')
  } else {
    collectionsButton.classList.add('active');
    coursesButton.classList.remove('active');
    wishlistButton.classList.remove('active');
    archivedButton.classList.remove('active');
    mainDisplay
  }
}

function selectWishlist() {
  var mainDisplay = document.getElementById('display').innerHTML=`<p>✨Wishes!</p>`
  if (event.target.classList.contains('active')) {
    console.log('active')
  } else {
    wishlistButton.classList.add('active');
    collectionsButton.classList.remove('active');
    coursesButton.classList.remove('active');
    archivedButton.classList.remove('active');
    mainDisplay
  }
}

function selectArchived() {
  var mainDisplay = document.getElementById('display').innerHTML=`<p>fun</p>`
  if (event.target.classList.contains('active')) {
    console.log('alive')
  } else {
    archivedButton.classList.add('active');
    wishlistButton.classList.remove('active');
    collectionsButton.classList.remove('active');
    coursesButton.classList.remove('active');
    mainDisplay
  }
}
