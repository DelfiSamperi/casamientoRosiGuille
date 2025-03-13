//CARGA DEL ARCHIVO DE AUDIO

/*
document.getElementById("playAudio").addEventListener("click", function() {
    const audio = new Audio("./media/likePrayer.mp3");
    audio.play();
});
*/

document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio('./media/casate-conmigo.mp3');

    //const audio = document.getElementById("audio");
    const button = document.getElementById("playAudio");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.textContent = "⏸";
        } else {
            audio.pause();
            button.textContent = "▶";
        }
    });
});

// --------------------------------------------

//cuenta regresiva del casamiento

document.addEventListener("DOMContentLoaded", function () {
    function actualizarCuentaRegresiva() {
        const fechaObjetivo = new Date("2025-10-12T00:00:00").getTime();
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            document.getElementById("timer").innerHTML = "¡Hoy es el gran día! 🎉";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    // Actualizar cada segundo
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva(); // Llamar inmediatamente para que no haya espera de 1 segundo
});

// ------------------------------------------------

//BOTON HACIA EL FORM
document.getElementById("linkBtn").addEventListener("click", function () {
    window.open("https://forms.gle/DMxDQtH1zAb2tRjh6", "_blank");
});

// ------------------------------------------------------
// lightbox de la galeria de imagenes
const images = [
    "./media/compressed/agua1.webp",
    "./media/compressed/IMG_0167.webp",
    "./media/compressed/IMG_0178.webp",
    "./media/compressed/IMG_0184.webp",
    "./media/compressed/agua2.webp",
    "./media/compressed/anillo.webp",
    "./media/compressed/IMG_0150.webp",
    "./media/compressed/IMG_0172.webp",
];


let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById("lightbox").classList.add("show");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    updateLightbox();
}

function updateLightbox() {
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("image-counter").textContent = `${currentIndex + 1} / ${images.length}`;
}

// Cerrar con tecla ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") changeImage(1);
    if (event.key === "ArrowLeft") changeImage(-1);
});

