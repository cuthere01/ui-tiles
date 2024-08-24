import data from './data.js';

const accordion = () => {

	const accordion = document.createElement('section');
	accordion.className = 'accordion';
	document.body.appendChild(accordion);

	const qna = () => {
		return data.map(item => {
			return `
				<div class="accordion__block">
					<div class="accordion__question">
						<h3>${item.header}</h3>
						<div class="ans-btn"></div>
					</div>
					<div class="accordion__desc" style="max-height: 0px;">
						<p>${item.desc}</p>
					</div>
				</div>
			`
		}).join('');
		
	}

	accordion.innerHTML = `
		<div class="container">
			<div class="accordion__content">
				<h2>Аккордеоны</h2>
				${qna()}
			</div>
		</div>
	`

	const btn = document.querySelectorAll('.ans-btn');
	const desc = document.querySelectorAll('.accordion__desc');

	const setHeight = (item, set) => {
		set ? item.classList.add("active") : item.classList.remove("active");
		item.style.maxHeight = (set ? `${item.scrollHeight}px` : `0`);
	};

	desc.forEach(item => {
		setHeight(item, true);
		setHeight(item, false);
	});

	document.querySelectorAll('.accordion__block').forEach((item, i) => {

		item.addEventListener('click', () => {
			if (desc[i].classList.contains('active')) {
				setHeight(desc[i], false);
			} else {
				setHeight(desc[i], true);
			}
			btn[i].classList.toggle("active");
		});

		window.addEventListener('resize', () => {
			if (desc[i].classList.contains('active')) {
				setHeight(desc[i], true);
			}
		});

	});
}

export default accordion;