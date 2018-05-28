var fullImg = document.querySelector('.full-img');
var thumbBar = document.querySelector('.thumb-bar');
var imgCont = document.querySelector('.images');

var images = ["sleep.gif","grill.png", "bloodlust.png", "epilepsy.gif", 
            "trees.gif", "fun.png","bear.png","group.png",
            "rocket.gif", "swirl.gif", "gummy.png", "hair.gif","profilePhoto.png"];
/* Looping through images */

for (var i = 0; i < 4; i++) {
  var newImg = document.createElement('img');
  newImg.setAttribute('src', 'assets/images/'+images[i]);
  if (i == 0) {
    fullImg.appendChild(newImg);
    fullImg = newImg;
  } else
    thumbBar.appendChild(newImg);
  newImg.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    e.target.setAttribute('src', fullImg.getAttribute('src'));
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  fullImg.setAttribute('src', imgSrc);

} 
     
      
     
/* Add the rest of the images */
for (var i = 4; i < images.length; i++) {
  newImg = document.createElement('img');
  newImg.setAttribute('src', 'assets/images/' + images[i]);
  imgCont.appendChild(newImg);
}