document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;

    const pageKeyMap = {
        '/': '9d4f6b83a2e7c05d1f38a7c69b52e4fa', // Home Page
        '/biodiesel-production-plant/': 'c5a8d79e3f4b62c0e1b7f9a54d38e6fb', // Biodiesel Page
        '/fuel-ethanol-production-plant/': 'c5a8d79e3f4b62c0e1b7f9a54d38e6fb', // Biodiesel Page
        '/inquiry/': 'ubkjdzi2txg33jnp4r5rrue2eyhvha', // inquiry Page
        '/contact/': 'f2b9c4d67aeb8053a1d36e5f92c7e8ab' // Contact Page
    };

    const key = pageKeyMap[path] || 'c5a8d79e3f4b62c0e1b7f9a54d38e6fb'; // fallback
    const input = document.querySelector('input[name="form_source_key"]');
    if (input) input.value = key;
});


document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('input[name="phonenumber"]');
    input.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, ''); // Remove non-digit characters
    });
});



// submit button disabled when second time click
document.addEventListener('wpcf7submit', function(event) {
  var form = event.target;
  var submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = false;
  }
}, false);

