function initAddressAutocomplete() {
  const pickupInput = document.getElementById("pickupLocation");
  const dropoffInput = document.getElementById("dropoffLocation");

  // Options for UK only
  const options = {
    types: ["geocode"],
    componentRestrictions: { country: "gb" } // UK restriction
  };

  // Create Google Autocomplete objects
  const pickupAutocomplete = new google.maps.places.Autocomplete(
    pickupInput,
    options
  );

  const dropoffAutocomplete = new google.maps.places.Autocomplete(
    dropoffInput,
    options
  );

  // Optional: Get place details
  pickupAutocomplete.addListener("place_changed", function () {
    const place = pickupAutocomplete.getPlace();
    console.log("Pickup:", place.formatted_address);
  });

  dropoffAutocomplete.addListener("place_changed", function () {
    const place = dropoffAutocomplete.getPlace();
    console.log("Dropoff:", place.formatted_address);
  });
}

window.onload = initAddressAutocomplete;
