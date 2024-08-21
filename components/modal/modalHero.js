import modal from './modal.js';
import data from './data.js';

const modalHero = () => {

	const section = document.createElement('section');
	section.className = 'main-section';
	document.body.appendChild(section);

	const buttons = () => {
		return data.triggers.map((item, i) => {
			return `<button class="openModal" data-id="${item}">${data.headers[i]}</button>`
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

	modal();
}

export default modalHero;