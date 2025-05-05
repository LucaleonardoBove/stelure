
(function () {
  emailjs.init('MXzzFBxWAesK5nT6g');  // tua Public Key
})();

function handleForm(formId, templateId, successCallback) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs
      .sendForm('service_salentostelure', templateId, this)  // Service ID corretto
      .then(() => {
        successCallback();
        this.reset();
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        alert('Si è verificato un errore. Riprova più tardi.');
      });
  });
}

// Form contatto
handleForm('contactForm', 'contact_template', () =>
  alert('Messaggio inviato con successo!')
);

// Form prenotazione
handleForm('bookingForm', 'booking_template', () => {
  const conf = document.getElementById('bookingConfirmation');
  if (conf) conf.style.display = 'block';
});
