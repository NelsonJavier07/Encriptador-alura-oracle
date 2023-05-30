const botonDesencriptador = document.querySelector(".boton-desencriptador");
botonDesencriptador.addEventListener("click", function desencriptadora() {
    let texto = input.value.toLowerCase()

    if (texto != "") {
        if (texto.includes("ai")) texto = texto.replaceAll("ai", "a");
        if (texto.includes("enter")) texto = texto.replaceAll("enter", "e");
        if (texto.includes("imes")) texto = texto.replaceAll("imes", "i");
        if (texto.includes("ober")) texto = texto.replaceAll("ober", "o");
        if (texto.includes("ufat")) texto = texto.replaceAll("ufat", "u");
        if (texto.includes("&")) texto = texto.replaceAll("&", " ");

        textarea.value = texto;
        mostrarElementos()
        return true
    }

    errorInput.style.display = "block"
})
