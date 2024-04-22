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

  // Select hamburger menu button and mobile navigation menu
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  // Add click event listener to hamburger menu button
  menu_btn.addEventListener('click', function () {
    // Toggle 'is-active' class on hamburger menu button and mobile navigation menu
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  // Add click event listeners to each link in the mobile navigation menu
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', function () {
      // Check if mobile menu is currently active
      if (mobile_menu.classList.contains('is-active')) {
        // If mobile menu is active, remove 'is-active' class from hamburger menu button and mobile navigation menu
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
      }
    });
  });
}
