
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-icon');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('change');
            
            if (mobileNav) {
                mobileNav.classList.toggle('show');
            }
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    resetErrors();
    
    let isValid = true;
    
    if (name === '' || name.length < 3) {
        displayError('nameError', 'Numele trebuie să aibă minim 3 caractere');
        isValid = false;
    }
    
    if (email === '' || !isValidEmail(email)) {
        displayError('emailError', 'Adresa de email nu este validă');
        isValid = false;
    }
    
    if (subject === '' || subject.length < 3) {
        displayError('subjectError', 'Subiectul trebuie să aibă minim 3 caractere');
        isValid = false;
    }
    
    if (message === '' || message.length < 10) {
        displayError('messageError', 'Mesajul trebuie să aibă minim 10 caractere');
        isValid = false;
    }
    
    return isValid;
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.innerText = message;
    }
}


function resetErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.innerText = '';
    });
}


function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    alert('Formularul a fost trimis cu succes!');
    
    form.reset();
    
    const formStatus = document.getElementById('formStatus');
    if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.className = 'success';
        formStatus.innerHTML = 'Mesajul a fost trimis cu succes!';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 3000);
    }
}

