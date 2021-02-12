/**
 *
 * @param {*} cls
 */

const modal = (cls) => {
  const btn = document.querySelector(`[data-target="${cls}"]`)

  btn.addEventListener('click', () => {
    const modal = document.querySelector('.' + btn.dataset.target)
    modal.classList.add('active')
    if (modal.classList.contains('active')) {
      initClose(modal)
      escape(modal)
    }
  })
}
/**
 *
 * @param {*} modal
 */
const initClose = (modal) => {
  /**
   *
   */
  modal.addEventListener('click', (e) => {
    const closeBtn = modal.querySelector('.close')
    e.cancelBubble = true
    if (e.target === modal || e.target.closest('.close') === closeBtn) {
      modal.classList.remove('active')
    }
  })
}
const escape = (el) => {
  /**
   *
   */
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      el.classList.remove('active')
    }
  })
}

export default modal
