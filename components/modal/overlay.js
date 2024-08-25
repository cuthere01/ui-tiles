import data from './data.js';

const overlay = () => {

	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'modal-overlay';
	document.body.appendChild(modalOverlay);

	const open = document.querySelectorAll('.openModal');

	const showContent = (current) => {
		return data.map(item => {
			if(item.name === current){
				return `
					<div class="container modal-block__wrapper">
						<div class="modal-block">
							<div class="modal-block__head">
								<h3>${item.header && item.header}</h3>
								<div class="modal-block__close"></div>
							</div>
							<div class="modal-block__content">
								<div class="modal-block__section">
									<p>
										${item.text && item.text}
										${item.link && `<br/><br/>Источник: <a href="${item.link}" target="_blank">${item.link}</a>`}
									</p>
								</div>
							</div>
						</div>
					</div>
				`
			} 
		}).join('');
	}

	const switcher = (dis) => {
		if(dis){
			modalOverlay.classList.remove('active');
			document.body.classList.remove('dis');
		} else {
			modalOverlay.classList.add('active');
			document.body.classList.add('dis');
		}
	}

	open.forEach(function (item) {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			switcher(false);
			modalOverlay.innerHTML = showContent(item.getAttribute("data-id"));

			const modalBlock = modalOverlay.querySelector('.modal-block');
			const close = modalOverlay.querySelector('.modal-block__close');
			
			modalOverlay.addEventListener('click', (e) => {
				const withinBoundaries = e.composedPath().includes(modalBlock);
				if (!withinBoundaries) {
					switcher(true);
				}
			});

			close.addEventListener('click', () => {
				switcher(true);
			});

		});
	});

}

export default overlay;

