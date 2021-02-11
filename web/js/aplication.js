const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log("Clik ismael")
    menu.classList.toggle('hidden');

})