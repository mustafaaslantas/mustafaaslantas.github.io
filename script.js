document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // Varsayılan anında atlama davranışını engeller
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
