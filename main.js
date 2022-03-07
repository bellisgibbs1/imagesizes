const body = document.querySelector("body");
const images = document.querySelectorAll (".image");

images.forEach(function (image) {
    image.addEventListener("click", function(e){
        e.preventDefault ();
        
        body.classList.toggle("big");
        
        });        

});
