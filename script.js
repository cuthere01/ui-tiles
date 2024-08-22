
import modalHero from './components/modal/hero.js';
import header from './components/header.js';
import sidebar from './components/sidebar.js';
import notificatorHero from './components/notificator/hero.js'
import accordion from './components/accordion.js';

document.addEventListener('DOMContentLoaded', () => {

	header();
	sidebar();
	modalHero();
	notificatorHero();
	accordion();

});