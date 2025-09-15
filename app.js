// ==================== Scroll Handling ====================
// Disable scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Always scroll to top on reload
window.onload = function () {
  window.scrollTo(0, 0);
};

// ==================== Disable Copy/Cut/Paste ====================
document.addEventListener('copy', (e) => {
  e.preventDefault();
  alert("Copying is disabled on this website!");
});

document.addEventListener('cut', (e) => {
  e.preventDefault();
  alert("Cutting is disabled on this website!");
});

document.addEventListener('paste', (e) => {
  e.preventDefault();
  alert("Pasting is disabled on this website!");
});

// ==================== Hamburger Menu ====================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a navigation link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ==================== Contact Form Submission ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          window.location.href = 'thankyou.html';
        } else {
          alert('Oops! There was a problem submitting the form.');
        }
      })
      .catch(error => {
        alert('Oops! There was a problem submitting the form.');
        console.error(error);
      });
  });
}

// ==================== Hire Form Submission ====================
const hireForm = document.getElementById('hireForm');
if (hireForm) {
  hireForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(hireForm);

    fetch(hireForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          window.location.href = 'thankyou.html';
        } else {
          alert('There was a problem submitting the form. Please try again.');
        }
      })
      .catch(error => {
        console.error(error);
        alert('There was a problem submitting the form. Please try again.');
      });
  });
}
