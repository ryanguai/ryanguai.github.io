  document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; // Initialize the current article index
      // Retrieve the selected value from localStorage if available
    const selectedValue = localStorage.getItem('selectedValue');
  
    const sectionTitle = document.getElementById('section-title');
    const articleImage = document.getElementById('article-image');
    const articleDescription = document.getElementById('article-description');
    const articlePath = document.getElementById('article-path');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
  
    let articles; // Declare the articles variable
    let currSectionTitle = selectedValue;
  
    // Function to update the current article
    function updateArticle() {
      sectionTitle.textContent = "{ " + currSectionTitle + " }";
      const currentArticle = articles[currentIndex];
      articleImage.src = currentArticle.imagePath;
      articleImage.alt = `Writing ${currentIndex + 1}`;
      articleDescription.textContent = currentArticle.description;
      articlePath.href = currentArticle.path;
    }

    button1.addEventListener('click', function() {
      currSectionTitle = 'faith';
         // Fetch the section data from the JSON file
    fetch('sections.json')
    .then(response => response.json())
    .then(data => {
      // Store the fetched article data in the articles variable
      articles = data[currSectionTitle].articles;
      // Initial update to display the first article
      updateArticle();
    })
    .catch(error => {
      console.log('Error fetching article data:', error);
    });
      updateArticle();
    });
  
    button2.addEventListener('click', function() {
      currSectionTitle = 'travel';
         // Fetch the section data from the JSON file
    fetch('sections.json')
    .then(response => response.json())
    .then(data => {
      // Store the fetched article data in the articles variable
      articles = data[currSectionTitle].articles;
      // Initial update to display the first article
      updateArticle();
    })
    .catch(error => {
      console.log('Error fetching article data:', error);
    });
      updateArticle();
    });
  
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
  
    // Fetch the section data from the JSON file
    fetch('sections.json')
      .then(response => response.json())
      .then(data => {
        // Store the fetched article data in the articles variable
        articles = data[currSectionTitle].articles;
        // Initial update to display the first article
        updateArticle();
      })
      .catch(error => {
        console.log('Error fetching article data:', error);
      });
  });

  let currentTab = 'faith';
  
  // Function to update the active tab styling
function updateActiveTab() {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');

  // Remove the active class from both buttons
  button1.classList.remove('active');
  button2.classList.remove('active');
  // Retrieve the selected value from localStorage if available
  const selectedValue = localStorage.getItem('selectedValue');  
  currentTab = selectedValue;

  // Add the active class to the corresponding button based on the currentTab value
  if (currentTab === 'faith') {
    button1.classList.add('active');
  } else if (currentTab === 'travel') {
    button2.classList.add('active');
  }
}

// Event listener for the "Faith" button
document.getElementById('button1').addEventListener('click', function() {
  currentTab = 'faith';
  localStorage.setItem('selectedValue', currentTab);
  updateActiveTab();
  // Additional actions or logic specific to the "Faith" tab
});

// Event listener for the "Travel" button
document.getElementById('button2').addEventListener('click', function() {
  currentTab = 'travel';
  localStorage.setItem('selectedValue', currentTab);
  updateActiveTab();
  // Additional actions or logic specific to the "Travel" tab
});

// Initial update of the active tab styling
updateActiveTab();


  
    
  