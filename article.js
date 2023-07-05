document.addEventListener('DOMContentLoaded', function() {
    const backLink = document.getElementById('back-link');
    
    backLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Retrieve the state from localStorage and perform the necessary actions
      const state = localStorage.getItem('myState');
      // Use the retrieved state to affect the rendering of the page
      
      // Navigate to the new page
      window.location.href = 'index.html';
    });
  });
  