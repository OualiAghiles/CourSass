// here you put all the js you want.
// import Dropdown from "./js/dropdown.js";
import tabs from './js/tabs.js'
import collapse from './js/collapse.js'
import offcanevas from './js/offcanevas.js'
import modal from './js/modal.js'

// Dropdown(".dropdown", '.show-menu', '.dropdown-body')

tabs('.tabs', '.tabs-menu li button', '.tab-container')

collapse('.collapse')

// Dropdown(".dropdown-el", 'button', '.dropdown-body')

offcanevas('offcanevas', '.close')

modal('modal')
