import './styles.css';
import createHomeContentDiv from './home.js';
import createMenuContentDiv from './menu.js';
import createAboutContentDiv from './about.js';

console.log("Hello World from the Restaurant Page project.");
console.log(document.querySelector('header').offsetHeight);

function clearContentDiv() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerText = '';
}

function populate(content) {
    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(content);
}

function onClick(content) {
    clearContentDiv();
    populate(content);
}

document.querySelector('#home-button') .addEventListener('click', () => onClick(createHomeContentDiv()));
document.querySelector('#menu-button') .addEventListener('click', () => onClick(createMenuContentDiv()));
document.querySelector('#about-button').addEventListener('click', () => onClick(createAboutContentDiv()));

onClick(createHomeContentDiv());