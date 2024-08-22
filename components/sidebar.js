const sidebar = () => {

	const sidebar = document.createElement('div');
	sidebar.className = 'sidebar';
	document.body.appendChild(sidebar);

	const showContent = () => {
		return `
			<div class="sidebar__block">
				<div class="sidebar__close-wrapper">
					<div class="sidebar__close"></div>
				</div>
				<div class="sidebar__desc">
					<a href="#">Первый</a>
					<a href="#">Второй</a>
					<a href="#">Третий</a>
					<a href="#">И так далее...</a>
				</div>
			</div>
		`
	}

	sidebar.innerHTML = showContent();

	const open = document.querySelector('.side-trigger');
	const linkClose = document.querySelectorAll('.sidebar__desc a');
	const close = document.querySelector('.sidebar__close');
	const overSide = document.querySelector('.sidebar__block');

	open.addEventListener('click', () => {

		const switcher = (dis) => {
			if(dis){
				sidebar.classList.remove('active');
				document.body.classList.remove('dis');
			} else {
				sidebar.classList.add('active');
				document.body.classList.add('dis');
			}
		}

		switcher(false);

		sidebar.addEventListener('click', (e) => {
			const withinBoundaries = e.composedPath().includes(overSide);
			if (!withinBoundaries) {
				switcher(true);
			}
		});

		close.addEventListener('click', () => {
			switcher(true);
		});

		linkClose.forEach((item) => {
			item.addEventListener('click', () => {
				switcher(true);
			});
		});

	});

}

export default sidebar;