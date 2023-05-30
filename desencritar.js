let botonDesencriptador = document.querySelector(".boton-desencriptador");
let textareaB = document.querySelector(".textarea");
let inputA;


botonDesencriptador.addEventListener("click", function desencriptadora() {
    inputA = document.querySelector(".entrada-texto").value.toLowerCase();

        if (inputA.includes("ai")) inputA = inputA.replaceAll("ai", "a");
        if (inputA.includes("enter")) inputA = inputA.replaceAll("enter", "e");
        if (inputA.includes("imes")) inputA = inputA.replaceAll("imes", "i");
        if (inputA.includes("ober")) inputA = inputA.replaceAll("ober", "o");
        if (inputA.includes("ufat")) inputA = inputA.replaceAll("ufat", "u");
        if (inputA.includes("&")) inputA = inputA.replaceAll("&", " ");

        textareaB.value = inputA;
        ocultar();
        limpiarInput();
    })


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

const limpiarInput = () => {
    let input = document.querySelector(".entrada-texto").value = "";
}
