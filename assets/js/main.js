// Execute this code when the window has finished loading
window.onload = function () {
  // Add scroll event listener to the window
  window.addEventListener('scroll', function (e) {
    // Check if the vertical scroll position is greater than 100 pixels
    if (window.scrollY > 100) {
      // If scroll position is greater than 100 pixels, add 'is-scrolling' class to header
      document.querySelector("header").classList.add('is-scrolling');
    } else {
      // If scroll position is less than or equal to 100 pixels, remove 'is-scrolling' class from header
      document.querySelector("header").classList.remove('is-scrolling');
    }
  });

  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');
  const projects = document.querySelectorAll('.project');

  // Toggle mobile navigation visibility
  menuBtn.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    // Hide tooltips when mobile navigation is activated
    projects.forEach(project => {
      const tooltip = project.querySelector('.mobile-tooltip');
      if (mobileMenu.classList.contains('is-active')) {
        tooltip.style.display = 'none';
      } else {
        tooltip.style.display = 'block';
      }
    });
  });

  // Event listener for mobile nav links
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
    });
  });

  // Click event to hide tooltips when a project is clicked
  projects.forEach(project => {
    project.addEventListener('click', function () {
      this.querySelector('.mobile-tooltip').style.display = 'none';
    });
  });
}
