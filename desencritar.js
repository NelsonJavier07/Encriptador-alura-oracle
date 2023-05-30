const botonDesencriptador = document.querySelector(".boton-desencriptador");
// let textareaB = document.querySelector(".textarea");
// let inputA;

// const botonEncriptar = document.querySelector(".boton-encriptador");
// const textarea = document.querySelector(".textarea");
//const errorInput = document.querySelector(".error-input-vacio")
//const botonDinamico = document.querySelector(".botonDinamico")

// const imagen = document.querySelector(".robot");
// const tituloInformativo = document.querySelector(".titulo-indicador-vacio");
// const textoInformativo = document.querySelector(".texto-indicador-vacio");
// const input = document.querySelector(".entrada-texto");

botonDesencriptador.addEventListener("click", function desencriptadora() {
    // inputA = document.querySelector(".entrada-texto").value.toLowerCase();
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


/*
const ocultar = () => {
    inputA = document.querySelector(".entrada-texto").value;
    let tituloInformativo = document.querySelector(".titulo-indicador-vacio");
    let textoInformativo = document.querySelector(".texto-indicador-vacio");
    let imagen = document.querySelector(".robot");
    if (inputA != "") {

        imagen.style.display = "none";
        tituloInformativo.innerHTML = "";
        textoInformativo.value = "";

    } else {

        imagen.style.display = "content";
    }
}
*/

/*
const limpiarInput = () => {
    document.querySelector(".entrada-texto").value = "";
}
*/


/*
const mostrarElementos = () => {
    imagen.style.display = "none";
    tituloInformativo.style.display = "none";
    textoInformativo.style.display = "none";
    errorInput.style.display = "none"
    botonDinamico.style.display = "inline-block";
    input.value = "";
}

const ocultarElementos = () => {
    imagen.style.display = "block";
    errorInput.style.display = "none";
    botonDinamico.style.display = "none";
}
*/