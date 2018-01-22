
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".thum-img img");
//create opacity variable
const opacity = 0.2;
// set first image opacity
imgs[0].style.opacity = opacity;

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
    // Remove fade-in class after 0.5s
   setTimeout(()=> current.classList.remove('fade-in'),500);

}

/** the short way 
imgs.forEach(img => img.addEventListener('click',(e)=> 
current.src = e.target.src));
*/
