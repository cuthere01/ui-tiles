import data from './data.js';

const notificator = () => {

	const notificator = document.createElement('div');
	notificator.className = 'notificator';
	document.body.appendChild(notificator);

	const notice = document.querySelectorAll('.notice');

	const showContent = (current) => {
		return data.name.map((item, i) => {
			if(item === current){
				return `
					<div>
						<img src="./assets/${data.img[i]}.svg"/>
						<p>${data.text[i]}</p>
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