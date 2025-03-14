// Scroll Animasyonları
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Proje ve Yetenek Verileri
const projects = [
    { title: "Proje 1", description: "Lorem ipsum dolor sit amet" },
    { title: "Proje 2", description: "Consectetur adipiscing elit" },
    { title: "Proje 3", description: "Sed do eiusmod tempor incididunt" }
];

const skills = [
    "HTML5", "CSS3", "JavaScript",
    "React", "Node.js", "Python",
    "Java", "SQL", "Git"
];

// Projeleri Yükle
function loadProjects() {
    const grid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        grid.appendChild(card);
    });
}

// Yetenekleri Yükle
function loadSkills() {
    const container = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.textContent = skill;
        container.appendChild(item);
    });
}

// Sayfa Yüklendiğinde Çalıştır
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
});

// Form Gönderimi
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target),
            headers: { 'Accept': 'application/json' }
        });

        if(response.ok) {
            alert('Mesajınız başarıyla gönderildi!');
            e.target.reset();
        } else {
            throw new Error('Gönderim başarısız');
        }
    } catch (error) {
        alert('Hata oluştu: ' + error.message);
    }
});