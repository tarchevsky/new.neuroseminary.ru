
'use strict';

//Emblem

const text = document.querySelector(".text p");
		text.innerHTML = text.innerText.split("").map((letter, i) =>
		`<span style="transform:rotate(${i * 22}deg")>${letter}</span>`
		)
		.join("");

// Slick

$('.videos__wrapper').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			 slidesToShow: 3,
			 slidesToScroll: 3,
			 infinite: true,
			 dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	 ]
 });
	
// Form

// $('#consultation-form').validate({
// 	rules: {
// 		name: 'required',
// 		email: {
// 			required: 'true',
// 			email: 'true'
// 		}
// 	}
// });

 