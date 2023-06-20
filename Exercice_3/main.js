let inputNom = document.getElementById("lastname");

inputNom.addEventListener("keyup", function(event) {
  let valeurChamp = event.target.value;
  alert(valeurChamp);
});