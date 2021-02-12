/**
 * Tabs component
 * @param {String} cls  main content fo the component tabs
 * @param {String} link links menu tabs (html element or class)
 * @param {String} container main content for the body tabs (class)
 * @param {String} activeClass class to toggle to show or hide elements
 */

const tabs = (cls, link, container, activeClass) => {
  /**
   * check the active class
   */
  if (!activeClass) {
    activeClass = 'active'
  }
  // dom selection
  const tabBlock = document.querySelector(cls)
  const linksTab = tabBlock.querySelectorAll(link)
  const content = document.querySelector(container)

  // loop through links
  linksTab.forEach(link => {
    // add event listener 'click

    link.addEventListener('click', (e) => {
      e.preventDefault()

      // target active elements to hide

      const activeTab = tabBlock.querySelector('li.active')
      const activeTabContent = content.querySelector('.' + activeClass)

      // target the new active body element
      const target = link.dataset.target

      // toggle classes to hide

      activeTab.classList.remove(activeClass)
      activeTabContent.classList.remove(activeClass)

      // toggle classes to show

      link.parentNode.classList.add(activeClass)
      document.querySelector(target).classList.add(activeClass)
    })
  })
}

export default tabs
