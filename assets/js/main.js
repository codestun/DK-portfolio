// Execute this code when the window has finished loading
window.onload = function () {
  // Check if the device supports touch
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');
  const projects = document.querySelectorAll('.project');

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

  menuBtn.addEventListener('click', function () {
    // Toggle mobile nav visibility
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    if (mobileMenu.classList.contains('is-active')) {
      hideAllTooltips(); // Hide tooltips when mobile nav is open
    } else {
      if (!isTouchDevice) {
        resetTooltips(); // Reset tooltips for non-touch devices when nav is closed
      }
    }
  });

  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', function () {
      // Close mobile nav when a link is clicked
      menuBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-active');
      if (!isTouchDevice) {
        resetTooltips(); // Reset tooltips when mobile nav is closed on non-touch devices
      }
    });
  });

  if (isTouchDevice) {
    // Handle tooltip visibility on touch devices
    projects.forEach(project => {
      project.addEventListener('click', function () {
        const tooltip = this.querySelector('.mobile-tooltip');
        const isVisible = tooltip.style.display === 'block';
        hideAllTooltips(); // First hide all tooltips
        tooltip.style.display = isVisible ? 'none' : 'block'; // Then toggle the clicked one
      });
    });
  } // No else branch is needed because we do not handle clicks for tooltips on non-touch devices

  function hideAllTooltips() {
    projects.forEach(project => {
      project.querySelector('.mobile-tooltip').style.display = 'none';
    });
  }

  function resetTooltips() {
    // Reset tooltips only if the mobile nav is not active and if it's a touch device
    if (!mobileMenu.classList.contains('is-active') && isTouchDevice) {
      projects.forEach(project => {
        project.querySelector('.mobile-tooltip').style.display = 'block';
      });
    }
  }
}
