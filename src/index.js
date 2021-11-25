import AOS from 'aos'
import LazyLoad from 'vanilla-lazyload'

import './sass/main.sass'

AOS.init()
new LazyLoad()

const modal = document.getElementById('modal')
const modalImage = document.getElementById('modalImage')
const modalBackground = document.getElementById('modalBackground')
const modalClose = document.getElementById('modalClose')
const imgs = document.querySelectorAll('[data-able-dialog]')
for (const img of imgs) {
  img.onclick = () => {
    modal.classList.add('is-active')
    modalImage.src = img.src
  }
}
modalBackground.onclick = () => modal.classList.remove('is-active')
modalClose.onclick = () => modal.classList.remove('is-active')
