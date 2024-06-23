// Get the form element
const contactForm = document.getElementById('contactSubmit');

// Add event listener for form submission and console log entries
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. Your contact info has been received!');
  
  const formData = new FormData(contactForm);
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });
  
  console.log('Form Data:', formValues);

});