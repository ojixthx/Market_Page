// Navigation function with slower transition
function goToHome(page) {
  document.body.classList.add('page-hide');
  setTimeout(() => {
    window.location.href = page;
  }, 400);
}


function smoothNavigate(url) {
  document.body.classList.add('page-hide');
  
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}

// Add fade in effect on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-show');
  
  const teamLinks = document.querySelectorAll('a[href="team.html"], a[href="n_index.html"]');
  teamLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      smoothNavigate(this.getAttribute('href'));
    });
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#navigation') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});