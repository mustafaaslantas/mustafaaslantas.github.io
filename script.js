document.addEventListener('DOMContentLoaded', () => {
    // Değişkenler
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('active'));
    }, { threshold: 0.1 });

    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const modal = document.getElementById('certificate-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    // Veri Setleri
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

    const certificates = [
        { 
            title: "Almanca B1 - English Time", 
            image: "assets/certificates/deutsch.jpg", 
            description: "Almanca B1 Seviye Sertifikası" 
        },
		{
			title: "Patika Test Otomasyon Sertifikası",
			image: "assets/certificates/testotomasyon.jpg", 
			description: "Test otomasyon teknolojileri."
	}
    ];

    // Fonksiyonlar
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    };

    const closeMenuOnClickOutside = (e) => {
        if(!navLinks.contains(e.target) && !hamburger.contains(e.target)) toggleMenu();
    };

    const loadProjects = () => {
        const grid = document.querySelector('.projects-grid');
        projects.forEach(project => {
            grid.innerHTML += `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
        });
    };

    const loadSkills = () => {
        const container = document.querySelector('.skills-container');
        skills.forEach(skill => {
            container.innerHTML += `
                <div class="skill-item">${skill}</div>
            `;
        });
    };

    const loadCertificates = () => {
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
            card.addEventListener('click', () => {
                modalImg.src = cert.image;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            grid.appendChild(card);
        });
    };

    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => navLinks.classList.contains('active') && closeMenuOnClickOutside(e));
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    window.addEventListener('click', (e) => e.target === modal && closeModal.click());
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', toggleMenu));

    // İlk Yüklemeler
    document.querySelectorAll('.section').forEach(section => observer.observe(section));
    loadProjects();
    loadSkills();
    loadCertificates();

    // Form Gönderimi
    document.querySelector('.contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: new FormData(e.target),
                headers: { 'Accept': 'application/json' }
            });
            response.ok ? (alert('Mesajınız başarıyla gönderildi!'), e.target.reset()) 
                       : alert('Gönderim başarısız!');
        } catch (error) {
            alert('Hata oluştu: ' + error.message);
        }
    });
});