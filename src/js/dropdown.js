// TODO: transform the fuction to class

/**
 * @description simple dropdown menu
 * @param {String} cls dropdown class targeted (dropdown)
 * @param {String} btn element class to open the dropdown(show-menu)
 * @param {String} body dropdown body class(dropdown-body)
 * @param {String} activeClass class to add to the dropdown and the button on active state default="active"
 * @example  <div class="mobile-menu dropdown">
 *               <a href="" class="show-menu"> dropdown btn </a>
 *              <ul class="dropdown-body"> dropdown body </ul>
 *              </div>
 *
 *
 */

function Dropdown (cls, btn, body, activeClass) {
  /**
   * test if active class exist
   */
  if (!activeClass) {
    activeClass = 'active'
  }
  // target the dropdown content
  const dropdown = document.querySelector(cls)
  // target the btn element dropdown
  const btnDropdown = dropdown.querySelector(btn)
  // target the dropdown body
  const bodyDropdown = dropdown.querySelector(body)
  // add event click on the btn element
  btnDropdown.addEventListener('click', (e) => {
    // remove the default actions
    e.preventDefault()
    // toggle classes
    btnDropdown.classList.toggle(activeClass)
    bodyDropdown.classList.toggle(activeClass)
  })
}
// export the fuction
export default Dropdown
