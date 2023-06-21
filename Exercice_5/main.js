// EXERCICE 5 ET 6


function changerImage() {
    let image = this
    let cheminImage = image.src;
    let cheminImageAlternative = cheminImage.replace(".jpg", "_2.jpg");
    
    //Si il n'y a pas déjà de data-attribute nommé originalSrc pour mon image, je la créer
    if (!image.dataset.originalSrc) {
        image.dataset.originalSrc = cheminImage;
      }
      
      //Si le src de mon image est celui d'origine
      if (image.src === image.dataset.originalSrc) {
        image.src = cheminImageAlternative;
      } else {
        image.src = image.dataset.originalSrc;
      }
  }
  
  let images = document.querySelectorAll("img");
//   console.log(images)
  
  images.forEach(image => {
    image.addEventListener("mouseenter", changerImage);
    image.addEventListener("mouseleave", changerImage);
  });

