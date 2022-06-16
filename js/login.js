const menu_mb = document.querySelector('.js-modal');
const modal = document.querySelector('.modal-js');
const close = document.querySelector('.close_btn');

function showMenuMB() {
  modal.classList.add('open_menu');
}

function removeMenu() {
  modal.classList.remove('open_menu');
}

menu_mb.addEventListener('click', showMenuMB);
close.addEventListener('click', removeMenu)