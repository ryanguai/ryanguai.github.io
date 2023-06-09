// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content');
    
    // Hide all sections except the "Home" section
    sections.forEach(function(section) {
      if (section.id !== 'home') {
        section.style.display = 'none';
      }
    });
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const sectionId = link.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        sections.forEach(function(section) {
            if (section === targetSection) {
              // Skip applying 'none' display to the target section
              return;
            }
            section.style.display = 'none';
            if (targetSection.id !== 'home') {
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'flex';
            }
          });

    
       

      });
    });
  });
  