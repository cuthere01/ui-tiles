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

export default sidebar;