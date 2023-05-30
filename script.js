const botonEncriptar = document.querySelector(".boton-encriptador");
const textarea = document.querySelector(".textarea");
const errorInput = document.querySelector(".error-input-vacio")
const botonDinamico = document.querySelector(".botonDinamico")

const imagen = document.querySelector(".robot");
const tituloInformativo = document.querySelector(".titulo-indicador-vacio");
const textoInformativo = document.querySelector(".texto-indicador-vacio");
const input = document.querySelector(".entrada-texto");

botonEncriptar.addEventListener("click", () => {
    const texto = input.value.toLowerCase()

    if (texto != "") {
        mostrarElementos();
        //botonDinamico();
        textarea.value = encriptadora(texto);
        return true
    }

    errorInput.style.display = "block"
});

const encriptadora = (texto) => {
    const arrayDeLetras = texto.split("");

    return arrayDeLetras.map((palabra) => {
        if (palabra === `a`) return `ai`;
        if (palabra === `e`) return `enter`;
        if (palabra === `i`) return `imes`;
        if (palabra === `o`) return `ober`;
        if (palabra === `u`) return `ufat`;
        if (palabra === ` `) return `&`;
        return palabra
    }).join("");

}

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


botonDinamico.addEventListener("click", function () {
    let nuevoInput = document.querySelector(".entrada-texto");
    nuevoInput.value = textarea.value;
    textarea.value = "";
    ocultarElementos();
})
