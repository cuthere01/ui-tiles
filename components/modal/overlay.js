import data from './data.js';

const overlay = () => {

	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'modal-overlay';
	document.body.appendChild(modalOverlay);

	const open = document.querySelectorAll('.openModal');

	const showContent = (current) => {
		return data.name.map((item, i) => {
			if(item === current){
				return `
					<div class="container modal-block__wrapper">
						<div class="modal-block">
							<div class="modal-block__head">
								<h3>${data.header[i] && data.header[i]}</h3>
								<div class="modal-block__close"></div>
							</div>
							<div class="modal-block__content">
								<div class="modal-block__section">
									<p>
										${data.text[i] && data.text[i]}
										${data.link[i] && `<br/><br/>Источник: <a href="${data.link[i]}" target="_blank">${data.link[i]}</a>`}
									</p>
								</div>
							</div>
						</div>
					</div>
				`
			} 
		});
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

