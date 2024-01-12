/*functioning search bar that stores*/

/*functioning movie randomizer*/

/* Api calls */


var img = document.getElementById("wheel");
img.addEventListener("click", function(){
  if(img.src != "Images/R.gif"){
    img.src = "https://picsum.photos/400/400";}
  else{
    img.src = "Images/R.gif";}});