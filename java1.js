function validateForm() {
    var name = document.getElementById('textbo').value;
    var password = document.getElementById('passwor').value;
    var confirmPassword = document.getElementById('p1').value;
    var email = document.getElementById('p3').value;

    if (name.trim() === '') {
        alert('Name cannot be empty');
        return;
    }

    if (password.trim() === '') {
        alert('Password cannot be empty');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one special character and one numeric character');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email address is not valid');
        return;
    }

    alert('Form submitted successfully!');
}