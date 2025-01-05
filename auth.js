// Auth state management
let isLoggedIn = false;

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation - in real app, this would connect to a backend
    if (email && password) {
        isLoggedIn = true;
        updateAuthUI();
        showCourses();
    }
    return false;
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple validation - in real app, this would connect to a backend
    if (name && email && password) {
        isLoggedIn = true;
        updateAuthUI();
        showCourses();
    }
    return false;
}

function handleLogout() {
    isLoggedIn = false;
    updateAuthUI();
    showLoginForm();
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (isLoggedIn) {
        loginBtn.classList.add('hidden');
        signupBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
    } else {
        loginBtn.classList.remove('hidden');
        signupBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    }
}

// Event Listeners
document.getElementById('loginBtn').addEventListener('click', showLoginForm);
document.getElementById('signupBtn').addEventListener('click', showSignupForm);
document.getElementById('logoutBtn').addEventListener('click', handleLogout);