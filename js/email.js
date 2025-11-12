const successAlert = document.getElementById("successAlert");
const errorAlert = document.getElementById("errorAlert");

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  successAlert.style.display = "none";
  errorAlert.style.display = "none";

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("http://127.0.0.1:9091/api/v1/taxi/contact-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      successAlert.style.display = "block";
      document.getElementById("contactForm").reset();

      // auto-hide the alert after 5 seconds
      setTimeout(() => (successAlert.style.display = "none"), 5000);
    } else {
      errorAlert.style.display = "block";
      setTimeout(() => (errorAlert.style.display = "none"), 5000);
    }
  } catch (err) {
    console.error("Error:", err);
    errorAlert.style.display = "block";
    setTimeout(() => (errorAlert.style.display = "none"), 5000);
  }
});
