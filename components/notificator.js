

const notificator = () => {

	const notificator = document.querySelector('.notificator');
	const notificatorContent = document.querySelector('.notificator div');
	const notice = document.querySelectorAll('.notice');
	const noticeImg = document.createElement('img');
	const noticeP = document.createElement('p');

	notificatorContent.appendChild(noticeImg);
	notificatorContent.appendChild(noticeP);

	const notificatorMap = {
		"triggers": ['later', 'coins', 'cart', 'event', 'auth', 'phone'],
		"img": ['clock', 'coin', 'cart', 'sad', 'user', 'phone'],
		"text": [
			'Раздел будет готов позже',
			'Наберите больше баллов',
			'Корзина пуста',
			'Конкурс завершен',
			'Требуется авторизация',
			'Номер недоступен'
		]
		
	}

	function createContent(current) {
		notificatorMap.triggers.forEach((item, i) => {
			if(item === current){
				console.log(current)
				noticeImg.src = './assets/' + notificatorMap.img[i] + '.svg';
				noticeP.textContent = notificatorMap.text[i];
			} 
		});
	}

	// вкл/выкл доступность нотификаторов, при активации/деактивации одного из нотификаторов
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
			createContent(item.getAttribute("data-id"));
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