// Proje Verileri (Burayı Kendine Göre Doldur)
const projects = [
    {
        title: "Proje 1",
        description: "Bu benim ilk harika projem!"
    },
    {
        title: "Proje 2",
        description: "React ile yaptığım e-ticaret sitesi"
    },
    {
        title: "Proje 3",
        description: "Node.js API projesi"
    }
];

// Yetenek Verileri (Burayı Kendine Göre Doldur)
const skills = [
    "HTML5", "CSS3", "JavaScript",
    "React", "Node.js", "Python",
    "Git", "SQL", "Photoshop"
];

// Projeleri Yükle
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Yetenekleri Yükle
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });
}

// Scroll Animasyonları
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Yumuşak Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Sayfa Yüklendiğinde Çalıştır
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
    setupScrollAnimations();
    setupSmoothScroll();
});

// Form Gönderimi
    // Form Gönderim Animasyonu
document.querySelector('form').addEventListener('submit', (e) => {
    const btn = document.querySelector('.submit-btn');
    btn.classList.add('loading');
    btn.disabled = true;
    setTimeout(() => {
        btn.classList.remove('loading');
        btn.disabled = false;
    }, 2000);
});
    alert('Mesajınız gönderildi!');
});