const btnMenu = document.getElementById('btn-menu')
const menu = document.querySelector('#MENU')

btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle('ativar')
    menu.classList.toggle('show-menu')

})