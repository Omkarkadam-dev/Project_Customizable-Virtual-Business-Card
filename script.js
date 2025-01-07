// DOM Elements
const nameInput = document.getElementById("name-input");
const jobInput = document.getElementById("job-input");
const contactInput = document.getElementById("contact-input");
const themeSelect = document.getElementById("theme-select");
const businessCard = document.getElementById("business-card");
const qrCodeContainer = document.getElementById("qr-code");
const downloadBtn = document.getElementById("download-btn");

// QR Code Generation
function generateQRCode(text) {
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
    text
  )}`;
  qrCodeContainer.innerHTML = `<img src="${apiUrl}" alt="QR Code">`;
}

// Update Card Content
function updateCard() {
  const name = nameInput.value || "Omkar Kadam";
  const job = jobInput.value || "Web Developer";
  const contact = contactInput.value || "omkarkadam@example.com";

  document.getElementById("name").textContent = name;
  document.getElementById("job-title").innerHTML = `<i class="fas fa-briefcase"></i> ${job}`;
  document.getElementById("contact").innerHTML = `<i class="fas fa-envelope"></i> ${contact}`;

  generateQRCode(`${name} | ${job} | ${contact}`);
}

// Change Card Theme
function changeTheme() {
  const selectedTheme = themeSelect.value;
  businessCard.className = `business-card ${selectedTheme}`;
}

// Download Card as an Image
function downloadCard() {
  html2canvas(businessCard).then((canvas) => {
    const link = document.createElement("a");
    link.download = "business-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

// Event Listeners
nameInput.addEventListener("input", updateCard);
jobInput.addEventListener("input", updateCard);
contactInput.addEventListener("input", updateCard);
themeSelect.addEventListener("change", changeTheme);
downloadBtn.addEventListener("click", downloadCard);

// Initialize
updateCard();
