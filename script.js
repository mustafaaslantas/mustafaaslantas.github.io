
document.addEventListener('DOMContentLoaded', () => {
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

    // Hamburger Menü Fonksiyonları
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    }

    function closeMenuOnClickOutside(e) {
        if(!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            toggleMenu();
        }
    }

    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => {
        if(navLinks.classList.contains('active')) {
            closeMenuOnClickOutside(e);
        }
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
    loadCertificates();

    // İçerik Yüklemeleri
    loadProjects();
    loadSkills();
const certificates = [
    {
        title: "AWS Sertifikası",
        image: "assets/cert-1.jpg",
        description: "Amazon Web Services Temel Eğitimi"
    },
    {
        title: "React Uzmanlık",
        image: "assets/cert-2.jpg",
        description: "İleri Seviye React Geliştirme"
    },
    // Diğer sertifikalar...
];

// SERTİFİKALARI YÜKLE
function loadCertificates() {
    const grid = document.querySelector('.certificates-grid');
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
            <div class="certificate-info">
                <h3>${cert.title}</h3>
                <p>${cert.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

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

    // Link Tıklamalarında Menü Kapatma
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});