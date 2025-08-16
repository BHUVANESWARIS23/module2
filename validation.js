document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const terms = document.getElementById('terms');

  form.addEventListener('submit', function (event) {
    let valid = true;

    // Full Name: only letters, at least 3 chars
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!nameRegex.test(fullName.value.trim())) {
      fullName.setCustomValidity("Enter a valid name (min 3 letters)");
      valid = false;
    } else {
      fullName.setCustomValidity("");
    }

    //Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.setCustomValidity("Enter a valid email address");
      valid = false;
    } else {
      email.setCustomValidity("");
    }

    // Password: min 8 chars, must contain uppercase, lowercase, number, special char
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passRegex.test(password.value)) {
      password.setCustomValidity(
        "Password must be 8+ chars, include upper, lower, number & special char"
      );
      valid = false;
    } 
    else {
      password.setCustomValidity("");
    }

    // Confirm Password matches
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
      valid = false;
    } else {
      confirmPassword.setCustomValidity("");
    }

    // Terms must be checked
    if (!terms.checked) {
      terms.setCustomValidity("You must agree before submitting");
      valid = false;
    } else {
      terms.setCustomValidity("");
    }

    // Prevent form submission if invalid
    if (!form.checkValidity() || !valid) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
   }, 
  false);
});