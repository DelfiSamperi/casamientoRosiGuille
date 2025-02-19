document.addEventListener("DOMContentLoaded", function() {
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
