let boutonRAZ = document.querySelector("button[name='button']");
let champsFormulaire = document.querySelectorAll("input[type='text']");

boutonRAZ.addEventListener("click", function() {
  champsFormulaire.forEach(champ => {
    champ.value = "";
  });
});