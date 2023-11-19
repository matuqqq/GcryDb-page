document.addEventListener("DOMContentLoaded", function() {
    const botonwhatsapp = document.getElementById('whatsapp');
    
    function enviarFormulario() {
        window.open("https://wa.me/5491164757788?text=Hola,%20Quiero%20realizar%20una%20consulta");
    }
    botonwhatsapp.addEventListener("click", enviarFormulario);
});

