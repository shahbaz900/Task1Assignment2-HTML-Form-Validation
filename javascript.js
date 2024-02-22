function validateSignIn() {
    var name = document.getElementById('textbox1').value;
    var password = document.getElementById('password1').value;

    if (name.trim() === '') {
        alert('Name cannot be empty');
        return false;
    }

    if (password.trim() === '') {
        alert('Password cannot be empty');
        return false;
    }

    // Regular expression to check if the password contains special characters
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharRegex.test(password)) {
        alert('Password must contain special characters');
        return false;
    }

    // If all validations pass, submit the form
    alert('Sign In successful!');
    return true;
}
