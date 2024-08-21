import data from './data.js';

const modal = () => {

	const modalOverlay = document.createElement('div');
	modalOverlay.className = 'modal-overlay';
	document.body.appendChild(modalOverlay);

	modalOverlay.innerHTML = `
		<div class="container modal-block__wrapper">
			<div class="modal-block">
				<div class="modal-block__head">
					<h3></h3>
					<div class="modal-block__close"></div>
				</div>
				<div class="modal-block__content">
					<div class="modal-block__section">
						
					</div>
				</div>
			</div>
		</div>
	`

	const open = document.querySelectorAll('.openModal');
	const overModal = modalOverlay.querySelector('.modal-block');
	const content = modalOverlay.querySelector('.modal-block__section');
	const close = modalOverlay.querySelector('.modal-block__close');
	const head = modalOverlay.querySelector('.modal-block__head h3');

	const showContent = (current) => {
		data.triggers.forEach((item, i) => {
			if(item === current){
				content.innerHTML = data.content[i];
				head.innerHTML = data.headers[i];
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
			showContent(item.getAttribute("data-id"));
		});
	});

	modalOverlay.addEventListener('click', (e) => {
		const withinBoundaries = e.composedPath().includes(overModal);
		if (!withinBoundaries) {
			switcher(true);
		}
	});

	close.addEventListener('click', () => {
		switcher(true);
	});

}

export default modal;

