// Course data
const courses = [
    {
        id: 1,
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
        thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
        duration: '10 hours',
        lessons: 12
    },
    {
        id: 2,
        title: 'JavaScript Mastery',
        description: 'Master JavaScript programming with practical projects.',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/Ke90Tje7VS0',
        duration: '15 hours',
        lessons: 18
    },
    {
        id: 3,
        title: 'Python Programming',
        description: 'Learn Python programming from scratch to advanced concepts.',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
        duration: '20 hours',
        lessons: 24
    },
    {
        id: 4,
        title: 'Data Science Essentials',
        description: 'Introduction to data science using Python and popular libraries.',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
        duration: '25 hours',
        lessons: 30
    },
    {
        id: 5,
        title: 'Mobile App Development',
        description: 'Build mobile applications using modern technologies.',
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
        duration: '18 hours',
        lessons: 22
    },
    {
        id: 6,
        title: 'Machine Learning Basics',
        description: 'Introduction to machine learning concepts and applications.',
        thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800',
        videoUrl: 'https://www.youtube.com/embed/JcI5Vnw0b2c',
        duration: '30 hours',
        lessons: 35
    }
];

function createCourseCard(course) {
    return `
        <div class="course-card">
            <img src="${course.thumbnail}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span>${course.duration}</span>
                    <span>${course.lessons} lessons</span>
                </div>
                <button onclick="showCourseDetail(${course.id})" class="btn-primary">Start Learning</button>
            </div>
        </div>
    `;
}

function showCourseDetail(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;

    const courseDetail = document.getElementById('courseDetail');
    courseDetail.innerHTML = `
        <div class="video-container">
            <iframe src="${course.videoUrl}" 
                    title="${course.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div class="course-info">
            <h1>${course.title}</h1>
            <div class="course-meta">
                <span>${course.duration}</span>
                <span>${course.lessons} lessons</span>
            </div>
            <p>${course.description}</p>
        </div>
    `;

    hideAllSections();
    courseDetail.classList.remove('hidden');
}