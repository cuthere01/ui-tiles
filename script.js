
const modal = () => {

	const modal = document.querySelector('.modal-overlay');
	const open = document.querySelectorAll('.openModal');
	const overModal = document.querySelector('.modal-block');
	const content = document.querySelectorAll('.modal-block__section');
	const close = document.querySelector('.modal-block__close');
	const head = document.querySelectorAll('.modal-block__head h3');

	const modalMap = {
		"triggers": ['starwars', 'sociology', 'sample', 'space'],
		"sections": [0, 1, 2, 3]
	}

	function show(current) {
		modalMap.triggers.forEach((item, i) => {
			if(item === current){
				content[modalMap.sections[i]].style = "display: flex";
				head[modalMap.sections[i]].style = "display: flex";
			} else {
				content[modalMap.sections[i]].style = "display: none";
				head[modalMap.sections[i]].style = "display: none";
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

document.addEventListener('DOMContentLoaded', () => {

	modal();

})