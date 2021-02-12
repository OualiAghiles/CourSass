/**
 * 
 * @param {String} cls target all collapses 
 */
const collapse = (cls) => {
	// check all collapese
	let els = document.querySelectorAll(cls)
	// loop through the table els and call toggle function for each
	els.forEach(el  => {
		toggle(el)
	})
}
/**
 * 
 * @param {HTMLElement} el add event listener click to toggle state
 */
const toggle = (el) => {
	let header = el.querySelector('header')
	let body = el.querySelector('main')
	header.addEventListener('click', () => {
		body.classList.toggle('active')
	})
}

export default collapse