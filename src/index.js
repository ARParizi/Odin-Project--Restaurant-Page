//import './styles.css';
import createHomeContentDiv from './home.js';

console.log("Hello World from the Restaurant Page project.");
console.log(document.querySelector('header').offsetHeight);

const contentDiv = document.querySelector('#content');
const homeContent = createHomeContentDiv();

contentDiv.appendChild(homeContent);