document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const responseDiv = document.getElementById('response');
    responseDiv.textContent = `Gracias por contactarnos, ${name}! Hemos recibido tu correo electrónico: ${email}.`;
});
