import notificator from './notificator.js';
import data from './data.js';

const hero = () => {

	const section = document.createElement('section');
	section.className = 'main-section';
	document.body.appendChild(section);

	const buttons = () => {
		return data.map((item, i) => {
			console.log(item)
			return `<button class="notice" data-id="${item.name}">${item.header ? item.header : `Нотификатор #${i + 1}`}</button>`
		}).join('');
		
	}

	section.innerHTML = `
		<div class="container">
			<div class="main-section__content">
				<h2 class="main-section__name">Нотификаторы</h2>
				<div class="main-section__buttons">
					${buttons()}
				</div>
			</div>
		</div>
	`

	notificator();
}

export default hero;