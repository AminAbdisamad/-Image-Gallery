// creating current image
//const current = document.querySelector("#current");
// creating images
//const imgs = document.querySelectorAll(".thum-img img");
// looping through images using forEach
const [current,imgs]=[document.querySelector("#current"),document.querySelectorAll(".thum-img img")];
const opacity = 0.2;
imgs.forEach(function(img){
    img.addEventListener('click',imgClick);
});

function imgClick(e){
    //Reset Opacity
    imgs.forEach(img => (img.style.opacity=1));
    // changing the current image to a source of clicked image
    current.src = e.target.src;
    // change the opacity of image to the opacity var
    e.target.style.opacity = opacity;
    // add fade-in class
    current.classList.add('fade-in');
    
}

/** the short way 
imgs.forEach(img => img.addEventListener('click',(e)=> 
current.src = e.target.src));
*/
