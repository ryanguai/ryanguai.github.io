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
  

  document.addEventListener('DOMContentLoaded', function() {
    const articles = [
      {
        image: 'socl22.jpg',
        description: 'School of Christian Leadership 2022: Called & Set Apart',
        path: 'socl22.html'
      },
      {
        image: 'socl23.jpg',
        description: 'School of Christian Leadership 2023'
      }
      // Add more articles as needed
    ];
  
    let currentIndex = 0; // Initialize the current article index
  
    const articleImage = document.getElementById('article-image');
    const articleDescription = document.getElementById('article-description');
    const articlePath = document.getElementById('article-path');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
  
    // Function to update the current article
    function updateArticle() {
      const currentArticle = articles[currentIndex];
      articleImage.src = currentArticle.image;
      articleImage.alt = `Writing ${currentIndex + 1}`;
      articleDescription.textContent = currentArticle.description;
      articlePath.href = currentArticle.path;
    }
  
    // Event listener for the left arrow
    arrowLeft.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + articles.length) % articles.length;
      updateArticle();
    });
  
    // Event listener for the right arrow
    arrowRight.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % articles.length;
      updateArticle();
    });
  
    // Initial update to display the first article
    updateArticle();
  });
  