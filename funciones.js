const colorInput = document.getElementById('inputColor')
const btnVisualizar = document.getElementById('boton')
const texto = document.getElementById('textoHexa')
const cardColor = document.getElementById('cardColor')


btnVisualizar.addEventListener('click', () => {
    texto.textContent = colorInput.value
    cardColor.style.backgroundColor = colorInput.value

})

