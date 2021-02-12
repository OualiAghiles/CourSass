const modal = (cls) => {
	let btn = document.querySelector(`[data-target="${cls}"]`);
	btn.addEventListener('click', () => {
		let modal = document.querySelector('.'+btn.dataset.target)
		modal.classList.add('active')
		if(modal.classList.contains('active')){
			initClose(modal)
		}
	})
}

const initClose = (modal) => {
	modal.addEventListener('click', (e) => {
		let closeBtn = modal.querySelector('.close')
		 e.cancelBubble = true;
		 if (e.target == modal || e.target.closest('.close') == closeBtn) {
			 modal.classList.remove('active')
		 }
	})
	window.addEventListener('keyup', (e) => {

		if (e.key == 'Escape') {
			modal.classList.remove('active')
		}
	})
}



export default modal