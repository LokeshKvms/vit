document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("svg path");
    if (this.classList.contains("collapsed")) {
      icon.setAttribute("d", "M8 1v14M1 8h14");
    } else {
      icon.setAttribute("d", "M2 2l12 12M14 2L2 14");
    }
  });
});

const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json/")
      .then((resp) => resp.json())
      .then((resp) => callback(resp.country_code))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
