let img = document.querySelector('#image1');

// Événement de survol (mouseover)
img.addEventListener("mouseover", function() {
    img.src = "images/image1_2.jpg";
});

// Événement de sortie du survol (mouseout)
img.addEventListener("mouseout", function() {
    img.src = "images/image1.jpg";
});