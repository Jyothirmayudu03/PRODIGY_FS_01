// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if login page exists
    if (document.getElementById('loginBtn')) {
        document.getElementById('loginBtn').addEventListener('click', function() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var errorMessage = document.getElementById('errorMessage');

            // Simple client-side validation
            if (!username || !password) {
                errorMessage.textContent = 'Please enter both username and password';
                errorMessage.style.display = 'block';
                return;
            }

            // Simulate login (replace with actual authentication logic)
            if (username === 'demo' && password === 'password') {
                localStorage.setItem('authToken', 'fake-token-123');
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
                errorMessage.style.display = 'block';
            }
        });
    }

    // Check if register page exists
    if (document.getElementById('registerBtn')) {
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirmPassword');
        var passwordStrengthMeter = document.getElementById('passwordStrengthMeter');
        var passwordHint = document.getElementById('passwordHint');

        function calculatePasswordStrength(password) {
            var strengthChecks = {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /[0-9]/.test(password),
                specialChar: /[!@#$%^&*()]/.test(password)
            };

            var strength = Object.values(strengthChecks).filter(Boolean).length;
            return (strength / 5) * 100;
        }

        passwordInput.addEventListener('input', function() {
            var strength = calculatePasswordStrength(passwordInput.value);
            passwordStrengthMeter.style.width = strength + '%';
            
            if (strength < 40) {
                passwordStrengthMeter.style.backgroundColor = '#ff0000';
                passwordHint.textContent = 'Weak password';
            } else if (strength < 70) {
                passwordStrengthMeter.style.backgroundColor = '#ffa500';
                passwordHint.textContent = 'Medium strength password';
            } else {
                passwordStrengthMeter.style.backgroundColor = '#00ff00';
                passwordHint.textContent = 'Strong password';
            }
        });

        document.getElementById('registerBtn').addEventListener('click', function() {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = passwordInput.value;
            var confirmPassword = confirmPasswordInput.value;
            var errorMessage = document.getElementById('errorMessage');

            // Validation checks
            if (!username || !email || !password) {
                errorMessage.textContent = 'Please fill in all fields';
                errorMessage.style.display = 'block';
                return;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Passwords do not match';
                errorMessage.style.display = 'block';
                return;
            }

            // Simulate registration
            errorMessage.textContent = 'Registration successful!';
            errorMessage.classList.remove('alert-danger');
            errorMessage.classList.add('alert-success');
            errorMessage.style.display = 'block';

            // Redirect to login after successful registration
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});
