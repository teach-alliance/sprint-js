let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);

document.querySelector('#loginFormElem').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

document.querySelector('#contactFormElem').addEventListener('submit', function(event) {
    event.preventDefault();
    sendContact();
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const alertDiv = document.getElementById('alert');

    if (!validateEmail(email)) {
        alertDiv.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    alertDiv.textContent = '';
    alert('Login bem-sucedido!');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;
    const alertDiv = document.getElementById('contactAlert');

    if (!validateEmail(email)) {
        alertDiv.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    alertDiv.textContent = '';
    alert('Mensagem enviada com sucesso!');
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('contactBtn').classList.remove('active');
}

function showContact() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('loginBtn').classList.remove('active');
    document.getElementById('contactBtn').classList.add('active');
}

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

showSlides();
