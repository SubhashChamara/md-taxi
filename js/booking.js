
document.getElementById("bookNowBtn").addEventListener("click", async () => {
  
  const data = {
    pickup: document.getElementById("pickupLocation").value,
    dropOff: document.getElementById("dropoffLocation").value,
    // vehicleType: document.getElementById("vehicleType").value,
    // pickupDate: document.getElementById("pickupDate").value,
    // pickupTime: document.getElementById("pickupTime").value,
    // dropoffDate: document.getElementById("dropoffDate").value,
    // dropoffTime: document.getElementById("dropoffTime").value
  };

  console.log("Sending to backend:", data);

  const response = await fetch(`${CONFIG.BASE_URL}/api/v1/taxi/distance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  // Display result
  document.getElementById("resultBox").innerHTML = `
      <div class="alert alert-info mt-3">
        <b>Distance:</b> ${result.distanceInMiles} miles <br>
        <b>Duration:</b> ${result.duration} <br>
        <b>Estimated Cost:</b> £${result.amount}
      </div>
  `;
});
