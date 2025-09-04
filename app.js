document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful! Redirecting to your dashboard.');
    window.location.href = '/dashboard';
});