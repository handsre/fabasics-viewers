const images = document.getElementById("viewer").getElementsByTagName("img");
const viewer = document.getElementById("viewer");
const imagesCount = images.length-1; // on definit l'index
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
const textdiv = document.createElement("div");
const timeout = 5000;

var currentImg = images[0];

var i = 0; //on instancie un compteur

function generateNav() {
  prevBtn.classList.add("buttonnav");
  prevBtn.append("<");
  prevBtn.setAttribute("id", "prev");
  viewer.append(prevBtn); // Bouton de navigation

  nextBtn.classList.add("buttonnav");
  nextBtn.append(">");
  nextBtn.setAttribute("id", "next");
  viewer.append(nextBtn);

  //let textdiv = document.createElement("div");
  //textdiv.setAttribute("id", "imgtitle");
  let text = document.createElement("p");
  text.setAttribute("id", "title");
  text.append(currentImg.getAttribute("title"));
  //textdiv.append(text);
  viewer.append(text);
}

function switchCss() {
  for (let p = 0; p <= imagesCount; p++) {
    images[p].classList.remove("showImage");
  }
  currentImg.classList.add("showImage");
}

nextBtn.onclick = function () {
  clearTimeout(started);

  if (i < imagesCount) {
    i++;
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title"); //$("#title").text(currentImg.attr("title"));
  } else if (i === imagesCount) {
    i = 0;
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title");
  }

  started = setTimeout(slideImg, timeout);
};

prevBtn.onclick = function () {
  clearTimeout(started);

  if (i > 0) {
    i--;
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title");
  } else if (i === 0) {
    i = imagesCount
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title");
  }
  started = setTimeout(slideImg, timeout);
};

var started;
var is_running = 0;

function slideImg() {
  if (i < imagesCount) {
    i++;
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title");
  } else if (i === imagesCount) {
    i = 0;
    currentImg = images[i];
    switchCss();
    document.getElementById("title").innerHTML =
      currentImg.getAttribute("title");
  }
  started = setTimeout(slideImg, timeout);
}

function startSlider() {
  if (!is_running) {
    is_running = 1;
    slideImg();
  }
}

generateNav();

startSlider();
