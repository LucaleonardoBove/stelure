// Gestione del form di prenotazione
const bookingForm = document.getElementById("bookingForm");
const bookingConfirmation = document.getElementById("bookingConfirmation");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // In un caso reale, invieresti i dati al server (AJAX o fetch)
    // Qui mostriamo solo un messaggio di conferma
    bookingForm.style.display = "none";
    bookingConfirmation.style.display = "block";
  });
}

// Gestione del form di contatto
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // In un caso reale, invieresti i dati al server (AJAX o fetch)
    alert("Messaggio inviato con successo! Ti risponderemo al più presto.");
    contactForm.reset();
  });
}
