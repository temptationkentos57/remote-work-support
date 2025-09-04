document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('You have successfully logged in! Redirecting to your dashboard...');
    window.location.href = '/dashboard';
});