// Scroll ke bagian tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form interaksi sederhana
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah terkirim 🚀");
  this.reset();
});
