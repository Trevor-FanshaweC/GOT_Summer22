(() => {
  // variables / DOM connections go here
  let   sigils = document.querySelectorAll('.sigilContainer'),
        houseVid = document.querySelector('video'),
        lightBox = document.querySelector('.lightbox'),
        closeBut = lightBox.querySelector('.close');

    function openLightbox() {
        lightBox.classList.add('show-lightbox');
        houseVid.currentTime = 0;
        houseVid.play();
    }

    function closeLightbox() {
        houseVid.currentTime = 0;
        houseVid.pause();
        lightBox.classList.remove('show-lightbox');
    }

    // event handling here (how is the user going to interact with stuff)
    sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

    houseVid.addEventListener('ended', closeLightbox);
    closeBut.addEventListener('click', closeLightbox);
})();
