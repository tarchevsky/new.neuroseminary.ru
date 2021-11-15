'use strict';

//Hamburger

let ham = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let hamactive = document.querySelector('.hamburger__active');
let body = document.querySelector('body');

ham.onclick = function() {
	ham.classList.toggle('hamburger__active');
	nav.classList.toggle('nav__active');
	body.classList.toggle('body__hidden')
};