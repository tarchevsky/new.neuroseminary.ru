'use strict';

//Hamburger

let ham = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let hamactive = document.querySelector('.hamburger__active');

ham.onclick = function() {
	ham.classList.toggle('hamburger__active');
	nav.classList.toggle('nav__active');
};