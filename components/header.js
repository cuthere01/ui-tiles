const header = () => {

	const header = document.querySelector('.header');

	const switcher = () => {
		if (header.getBoundingClientRect().top <= 1) {
			if(!header.classList.contains('active')) {
				header.classList.add('active');
			}
		}
		else {
			header.classList.remove('active');
		}
	}

	switcher();
	document.addEventListener("scroll", () => {
		switcher();
	});
	document.addEventListener("resize", () => {
		switcher();
	});

}

export default header;