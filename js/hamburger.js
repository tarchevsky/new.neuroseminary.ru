'use strict';

//Hamburger

let ham = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
let hamactive = document.querySelector('.hamburger__active');
let body = document.querySelector('body');
let formanchor = document.getElementById('readmore-menu');

ham.onclick = function() {
	ham.classList.toggle('hamburger__active');
	nav.classList.toggle('nav__active');
	body.classList.toggle('body__hidden');
};

formanchor.onclick = function() {
	nav.classList.remove('nav__active');
	body.classList.remove('body__hidden');
	ham.classList.remove('hamburger__active');
};