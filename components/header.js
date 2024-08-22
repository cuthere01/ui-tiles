const header = () => {

	const header = document.createElement('header');
	header.className = 'header';
	document.body.appendChild(header);

	const showContent = () => {
		return `
			<div class="container">
				<div class="header__content">
					<p class="header__name">header</p>
					<div class="side-trigger">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		`
	}

	header.innerHTML = showContent();

	//const header = document.querySelector('.header');

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