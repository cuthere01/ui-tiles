
import modal from './components/modal.js';
import header from './components/header.js';
import sidebar from './components/sidebar.js';
import notificator from './components/notificator.js'


document.addEventListener('DOMContentLoaded', () => {

	modal();
	header();
	sidebar();
	notificator();

});