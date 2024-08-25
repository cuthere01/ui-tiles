import data from './data.js';

const notificator = () => {

	const notificator = document.createElement('div');
	notificator.className = 'notificator';
	document.body.appendChild(notificator);

	const notice = document.querySelectorAll('.notice');

	const showContent = (current) => {
		return data.map((item, i) => {
			if(item.name === current){
				return `
					<div>
						${item.img && `<img src="./assets/${item.img}.svg"/>`}
						<p>${item.text ? item.text : `Текст нотификатора #${i + 1}`}</p>
					</div>
				`
			}
		}).join('');
	}

	const disNotice = (dis) => {
		dis ? notice.forEach((item) => {
			item.classList.add('dis');
		}) : notice.forEach((item) => {
			item.classList.remove('dis');
		});
	}

	notice.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			notificator.innerHTML = showContent(item.getAttribute("data-id"));
			notificator.classList.add('active');
			disNotice(true);
			setTimeout(() => {
				notificator.classList.remove('active');
				disNotice(false);
			}, 3000);
		});
	});

}

export default notificator;