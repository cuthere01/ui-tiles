
const modal = () => {

	const modal = document.querySelector('.modal-overlay');
	const open = document.querySelectorAll('.openModal');
	const overModal = document.querySelector('.modal-block');
	const content = document.querySelector('.modal-block__section');
	const close = document.querySelector('.modal-block__close');
	const head = document.querySelector('.modal-block__head h3');

	const modalMap = {
		"triggers": ['starwars', 'sociology', 'sample', 'space'],
		"headers": ['Звездные войны', 'Социологический опрос', 'Lorem ipsum', 'Факт о космосе'],
		"content": [
			'<p>Актерам разрешили подобрать любимый цвет для своих световых мечей. Чаще всего в фильмах можно увидеть оружие голубого, зеленого или красного цвета. При этом у Мэйса Винду, роль которого исполнил Сэмюэль Л. Джексон, меч необычного фиолетового цвета. <br><br> Источник: <a href="https://kudago.com/all/list/interesnye-fakty-o-sage-zvyozdnye-vojny/" target="_blank">https://kudago.com/all/list/interesnye-fakty-o-sage-zvyozdnye-vojny/</a></p>',
			'<p>Большинство россиян пользуются VPN-сервисами, чтобы заходить на заблокированные в России социальные сети — 60,3% и СМИ — 33,9%. Более 20% используют подобные приложения, чтобы скачивать фильмы и музыку. Для работы VPN подключают 18%, а ради анонимности в сети — 17,4% <br><br> Источник: <a href="https://adindex.ru/news/researches/2023/12/6/317755.phtml" target="_blank">https://adindex.ru/news/researches/2023/12/6/317755.phtml</a></p>',
			'<p>...dolor sit amet consectetur adipisicing elit. Voluptate distinctio illum ex dignissimos ea ullam totam quam reiciendis perferendis quibusdam, laudantium id ipsam quos eligendi provident labore repellendus autem expedita.</p>',
			'<p>В созвездии Рака можно заметить алмазную планету, на которой год длится 18 дней. Астрономы ее назвали Янсенн, поскольку она на треть состоит из алмаза. Однако одна ее часть расплавлена и представляет собой раскаленную лаву из углерода.В созвездии Рака можно заметить алмазную планету, на которой год длится 18 дней. Астрономы ее назвали Янсенн, поскольку она на треть состоит из алмаза. Однако одна ее часть расплавлена и представляет собой раскаленную лаву из углерода. <br><br> Источник: <a href="https://www.techinsider.ru/popmem/1631273-malinovyi-fresh-i-steklyannye-dojdi-samye-neobychnye-fakty-o-kosmose-ili-chto-eshche-skryvaet-ot-nas-neobyyatnaya-vselennaya/" target="_blank">https://www.techinsider.ru/popmem/1631273-malinovyi-fresh-i-steklyannye-dojdi-samye-neobychnye-fakty-o-kosmose-ili-chto-eshche-skryvaet-ot-nas-neobyyatnaya-vselennaya/</a></p>'
		]
		
	}

	function show(current) {
		modalMap.triggers.forEach((item, i) => {
			if(item === current){
				content.innerHTML = modalMap.content[i];
				head.innerHTML = modalMap.headers[i];
			} 
		});
	}

	open.forEach(function (item) {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			modal.style.display = 'flex';
			document.querySelector('body').style = 'overflow-y: hidden';
			show(item.getAttribute("data-id"));
		});
	});

	modal.addEventListener('click', (e) => {
		const withinBoundaries = e.composedPath().includes(overModal);
		if (!withinBoundaries) {
			modal.style = 'display: none';
			document.querySelector('body').style = 'overflow-y: auto';
		}
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
		document.querySelector('body').style = 'overflow-y: auto';
	});

}

const header = () => {

	const header = document.querySelector('.header');

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

const sidebar = () => {

	const sidebar = document.querySelector('.sidebar');
	const overSide = document.querySelector('.sidebar__block');
	const linkClose = document.querySelectorAll('.sidebar__desc a');
	const close = document.querySelector('.sidebar__close');
	const open = document.querySelector('.side-trigger');

	const off = () => {
		sidebar.classList.remove('active');
		document.querySelector('body').style='overflow-y: auto';
	}

	open.addEventListener('click', () => {
		document.querySelector('body').style='overflow-y: hidden;';
		document.querySelector('.sidebar').classList.add('active');
	});
	sidebar.addEventListener('click', (e) => {
		const withinBoundaries = e.composedPath().includes(overSide);
		if (!withinBoundaries) {
			off();
		}
	});
	close.addEventListener('click', () => {
		off();
	});
	linkClose.forEach((item)=>{
		item.addEventListener('click', () => {
			off();
		});
	});

}

document.addEventListener('DOMContentLoaded', () => {

	modal();
	header();
	sidebar();

})