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
        {
            title: "Selenium Webdriver ile Kitap Yurdu Web Test Otomasyonu",
            description: "Java dili ile Selenium Webdriver ve Cucumber kullanarak oluşturulmuş bir test otomasyonu. KitapYurdu.com web sitesinin temel özelliklerini test eder.",
            github: "https://github.com/mustafaaslantas/CucumberTest2",
            tech: ["Java", "Selenium"]
        },
        {
            title: "Appium ile KitapYurdu Android Uygulaması Test Otomasyonu",
            description: "Java dili ile Appium Driver kullanarak oluşturulmuş bir mobil test otomasyonu. Kitap Yurdu mobil uygulamasını test eder.",
            github: "https://github.com/mustafaaslantas/AppiumProject2",
            tech: ["Java", "Appium"]
        },
        {
            title: "Vaadin - Java Örnek Liste Uygulaması",
            description: "Vaadin arayüzü kullanılarak oluşturulan bu Java projesi, iş başvurusu mülakatı esnasında yapılmıştır. Model-View-Presenter mimarisi uygulanarak Passive View Prensibine uygun olarak geliştirilmiştir.",
            github: "https://github.com/mustafaaslantas/Vaadin-Test-Case",
            tech: ["Java", "Vaadin"]
        }, 
        {
            title: "Kişisel Web Sayfam",
            description: "Şu an bulunduğunuz web sayfası.",
            github: "https://github.com/mustafaaslantas/mustafaaslantas.github.io",
            tech: ["HTML", "CSS", "JavaScript"]
        }
    ];

    const skills = [
        "HTML5", "CSS3", "JavaScript",
        "Java", "Spring", "Selenium",
        "Appium", "Python", "Sklearn",
		"Pandas", "SQL", "C",
		"Git", "Docker", "Apache Kafka",
		"", "", ""
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
        },
		{ 
            title: "Microservisler ile Modern Yazılım Geliştirme: Teoriden Pratiğe",
            image: "assets/certificates/microservice.jpg", 
            description: "Mikroservisler ile modern yazılım geliştirme teknolojileri."
        },
		{ 
            title: "Agile 101",
            image: "assets/certificates/agile101.jpg", 
            description: "Agile ve Scrum bakış açısının temel kuralları."
        },
        
		{ 
            title: "Mülakat Teknikleri",
            image: "assets/certificates/mulakat.jpg", 
            description: "Mülakat teknikleri ve püf noktaları."
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
        grid.innerHTML = projects.map(project => `
            <a href="${project.github}" 
               class="project-card"
               target="_blank"
               rel="noopener noreferrer">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-footer">
                    ${project.tech.map(t => `<span class="tech">${t}</span>`).join('')}
                </div>
            </a>
        `).join('');
    };

    const loadSkills = () => {
        const container = document.querySelector('.skills-container');
        container.innerHTML = skills.map(skill => `
            <div class="skill-item">${skill}</div>
        `).join('');
    };

    const loadCertificates = () => {
        const grid = document.querySelector('.certificates-grid');
        grid.innerHTML = certificates.map(cert => `
            <div class="certificate-card">
                <img src="${cert.image}" 
                     alt="${cert.title}" 
                     class="certificate-image"
                     loading="lazy">
                <div class="certificate-info">
                    <h3>${cert.title}</h3>
                    <p>${cert.description}</p>
                </div>
            </div>
        `).join('');
    };

    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);
    
    document.addEventListener('click', (e) => {
        if(navLinks.classList.contains('active')) {
            closeMenuOnClickOutside(e);
        }
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // İlk Yüklemeler
    document.querySelectorAll('.section').forEach(section => observer.observe(section));
    loadProjects();
    loadSkills();
    loadCertificates();

    // Sertifika Kart Event'leri
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
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
            
            if(!response.ok) throw new Error('Sunucu hatası: ' + response.status);
            
            alert('Mesajınız başarıyla gönderildi!');
            e.target.reset();
        } catch (error) {
            alert('Hata oluştu: ' + (error.message || 'Bilinmeyen hata'));
        }
    });
});