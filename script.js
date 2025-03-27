//CARGA DEL ARCHIVO DE AUDIO

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
// desplazar desde portada a fecha

document.querySelector("#scrollToFecha").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.querySelector("#fecha").scrollIntoView({ behavior: "smooth" });
});
  
document.querySelector("#scrollToSpots").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.querySelector(".spots").scrollIntoView({ behavior: "smooth" });
});
  

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 500) { 
        let sections = document.querySelectorAll("section");
        let currentSection = 0;
        let isScrolling = false;

        window.addEventListener("wheel", function (event) {
            if (isScrolling) return;

            isScrolling = true;

            if (event.deltaY > 0) {
                if (currentSection < sections.length - 1) currentSection++;
            } else {
                if (currentSection > 0) currentSection--;
            }

            sections[currentSection].scrollIntoView({ behavior: "auto", block: "start" });

            setTimeout(() => { isScrolling = false; }, 500);
        });
    }
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

//---------------------------------------
// Descargar Dots Memories

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("descargarApp");

    // URLs de las tiendas
    const androidLink = "https://play.google.com/store/apps/details?id=social.onelife";
    const iosLink = "https://apps.apple.com/es/app/dots-memories-foto-y-v%C3%ADdeo/id6449039420";


    // Detectar sistema operativo
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        downloadBtn.href = androidLink;
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        downloadBtn.href = iosLink;
    } else {
        // Enlace por defecto (puede ser una página de información)
        downloadBtn.href = "#";
        downloadBtn.textContent = "Descargar en tu dispositivo";
    }
});
