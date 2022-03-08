const container = document.querySelector(".container");
const images = document.querySelectorAll (".image");

images.forEach(function (image) {
    image.addEventListener("click", function(e){
        e.preventDefault ();
        container.classList.toggle("image");
    });        
});
