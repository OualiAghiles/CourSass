/**
 *
 * @param {String} target check the dom element with data-target = target
 * @param {String} clsClose
 */
const offcanevas = (target, clsClose) => {
  const btn = document.querySelector(`[data-target="${target}"]`)
  const parent = document.querySelector(`#${btn.dataset.target}`)
  btn.addEventListener('click', () => {
    parent.classList.add('active')
  })
  close(parent, clsClose, btn)
}

/**
 *
 * @param {*} parent
 * @param {*} el
 */
function close (parent, el, btn) {
  const target = parent.querySelector(el)
  target.addEventListener('click', () => {
    parent.classList.remove('active')
  })

  document.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'Escape') {
      parent.classList.remove('active')
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target !== parent && e.target !== btn) {
      parent.classList.remove('active')
    }
  })
}

export default offcanevas
