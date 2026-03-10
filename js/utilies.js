document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/MoggerSir', '_blank');
});

document.getElementById('MandarCorreo').addEventListener('click', () => {
    const email = 'addnovel1474@gmail.com';
    const subject = 'Contacto desde Portafolio';
    const body = 'Hola Josmar, me gustaría contactarte para...';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
});
