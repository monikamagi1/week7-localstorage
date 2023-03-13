const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
movieTitleToDisplay.textContent = titleInStorage;
movieYearToDisplay.textContent = yearInStorage;
container.style.backgroundImage = `linear-gradient(rgba(49, 49, 158, 0.741), rgba(110, 66, 66, 0.706)), 
url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
let movieTitleInput = movieTitle.value;
let posterUrlInput = moviePosterUrl.value;
let yearInput = movieYear.value;
localStorage.setItem('title', movieTitleInput);
localStorage.setItem('imageUrl', posterUrlInput);
localStorage.setItem('year', yearInput);
movieTitleToDisplay.textContent = movieTitleInput;
movieYearToDisplay.textContent = yearInput;
container.style.backgroundImage = `linear-gradient(rgba(49, 49, 158, 0.741), rgba(110, 66, 66, 0.706)), 
url('${posterUrlInput}')`;
movieTitle.value = '';
moviePosterUrl.value = '';
movieYear.value = '';
});