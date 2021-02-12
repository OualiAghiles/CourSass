/**
 * Tabs component  
 * @param {String} cls  main content fo the component tabs
 * @param {String} link links menu tabs (html element or class)
 * @param {String} container main content for the body tabs (class)
 * @param {String} activeClass class to toggle to show or hide elements
 */


const tabs =  (cls, link,container, activeClass) => {
	/**
	 * check the active class
	 */
	if (!activeClass){
		activeClass = 'active'
	}
	//	dom selection
	let tabBlock = document.querySelector(cls)
	let linksTab = tabBlock.querySelectorAll(link)
	let content = document.querySelector(container)

	//loop through links 
	 
	linksTab.forEach(link => {

		//	  add event listener 'click

		link.addEventListener('click', (e)=> {

			e.preventDefault()


			// target active elements to hide

			let activeTab = tabBlock.querySelector('li.active')
			let activeTabContent = content.querySelector('.' + activeClass)


			// target the new active body element
			let target = link.dataset.target

			// toggle classes to hide

			activeTab.classList.remove(activeClass)
			activeTabContent.classList.remove(activeClass)


			// toggle classes to show
			
			link.parentNode.classList.add(activeClass)
			document.querySelector(target).classList.add(activeClass)

		})
	});

}

export default tabs