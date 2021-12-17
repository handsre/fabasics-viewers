const slider = document.getElementById("slider");
const images = slider.getElementsByTagName("div");
const imagesCount = images.length - 1;
const containerWidth = slider.offsetWidth;
const screenWidth = screen.availWidth;
var i = 0;
var currentImg = images[0];
var currentImgdivWidth = 0;
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");

function applycss() {
  for (let p = 0; p <= imagesCount; p++) {
    images[p].classList.add("scalepic");
  }
  currentImg.classList.remove("scalepic");
}

function generateNav() {
  prevBtn.classList.add("buttonnav")
  prevBtn.append("<");
  prevBtn.setAttribute("id", "prev");
  document.getElementById("scroller").append(prevBtn); // Bouton de navigation

  nextBtn.classList.add("buttonnav");
  nextBtn.append(">");
  nextBtn.setAttribute("id", "next");
  document.getElementById("scroller").append(nextBtn);
}



function move(){
    currentImgdivWidth = currentImg.offsetWidth;
    currentImgdivHeight = currentImg.offsetHeight;
    elementOffset  = currentImg.offsetLeft;
    if(currentImgdivWidth < currentImgdivHeight){
        slider.scrollLeft = elementOffset - currentImgdivWidth;
    }else{
        slider.scrollLeft = elementOffset;
    }
}

applycss();
generateNav();

nextBtn.onclick = function (e) {
  e.preventDefault();
  
  if (i < imagesCount) {
    i++;
    currentImg = images[i];
    move();
    applycss();
  } else if (i == imagesCount) {
    i = 0;
    currentImg = images[i];
    move();
    applycss();
  }
  
};

prevBtn.onclick = function (e) {
  e.preventDefault();
  if (i > 0) {
    i--;
    currentImg = images[i];
    move();
    applycss();
  } else {
    i = imagesCount;
    currentImg = images[i];
    move();
    applycss();
  }
};
