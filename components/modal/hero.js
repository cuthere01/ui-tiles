import overlay from './overlay.js';
import data from './data.js';

const hero = () => {

	const section = document.createElement('section');
	section.className = 'main-section';
	document.body.appendChild(section);

	const buttons = () => {
		return data.name.map((item, i) => {
			return `<button class="openModal" data-id="${item}">${data.header[i]}</button>`
		}).join('');
		
	}

	section.innerHTML = `
		<div class="container">
			<div class="main-section__content">
				<h2 class="main-section__name">Модальные окна</h2>
				<div class="main-section__buttons">
					${buttons()}
				</div>
			</div>
		</div>
	`

	overlay();
}

export default hero;