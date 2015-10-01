/*
 * Navigation
 */

var nav = document.querySelector('.js-nav');
var toggle = document.querySelector('.js-toggle');

nav.className = nav.className += ' is-hidden'; // Hidden by default

toggle.onclick = function () {
    nav.classList.toggle('is-hidden'); // Toggle the display
};