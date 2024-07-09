
        function validateForm() {
            var email = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            
            if (email.trim() === '' || !emailPattern.test(email)) {
                alert('Please enter a valid email address');
                return false;
            }

            
            if (password.trim() === '') {
                alert('Please enter your password');
                return false;
            }

            
            alert('Login successful!'); 
        }
