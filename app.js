// UI State Management
function hideAllSections() {
    const sections = ['loginForm', 'signupForm', 'coursesGrid', 'courseDetail'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
}

function showLoginForm() {
    hideAllSections();
    document.getElementById('loginForm').classList.remove('hidden');
}

function showSignupForm() {
    hideAllSections();
    document.getElementById('signupForm').classList.remove('hidden');
}

function showCourses() {
    if (!isLoggedIn) {
        showLoginForm();
        return;
    }

    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = courses.map(course => createCourseCard(course)).join('');
    
    hideAllSections();
    coursesGrid.classList.remove('hidden');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
    showLoginForm();
});