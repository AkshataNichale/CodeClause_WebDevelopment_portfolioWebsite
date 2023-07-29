// Get form and form elements
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform form validation (you can add your own validation logic)
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill out all fields.');
    return;
  }

  // You can perform further actions here, like sending the data to a server using AJAX

  // Display a success message (you can customize this based on your requirements)
  alert('Thank you for your message. I will get back to you soon.');

  // Reset the form
  contactForm.reset();
});
