const text = document.querySelector(".text p");
		
		text.innerHTML = text.innerText.split("").map((letter, i) =>
		`<span style="transform:rotate(${i * 22}deg")>${letter}</span>`
		)
		.join("");