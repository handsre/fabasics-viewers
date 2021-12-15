

  var img = document.getElementById("carrousel").getElementsByTagName("img");
  var carrousel = document.getElementById("carrousel");
  var currentImg = img[0]; //selectionne la premiere image du carrousel
  var imgIndex = img.length - 1; // on definit l'index

  var div = document.querySelectorAll("#bandeau.click"),
    currentDiv = div[0], //selectionne la premiere image du carrousel
    divIndex = div.length - 1; // on definit l'index
  console.log(div);
  console.log(currentDiv);
  console.log(divIndex);

  var p = 0; //on instancie un compteur

// Boutons de navigation
  let prevBtn = document.createElement("button");
  prevBtn.classList.add("buttonnav");
  prevBtn.append("<");
  prevBtn.setAttribute("id", "prev");
  carrousel.append(prevBtn); // Bouton de navigation

  let nextBtn = document.createElement("button");
  nextBtn.classList.add("buttonnav");
  nextBtn.append(">");
  nextBtn.setAttribute("id", "next");
  carrousel.append(nextBtn); // Bouton de navigation

  //Zone de texte
  let textdiv = document.createElement("div");
  textdiv.setAttribute("id", "imgtitle");
  let text = document.createElement("p");
  text.setAttribute("id", "title");
  text.append(currentImg.getAttribute("title"));
  textdiv.append(text);
  carrousel.append(textdiv);

  // on caches toute les images
  for (var i = 0, length = img.length; i < length; i++) {
    img[i].style.display = "none";
  }
  //on affiche l'image courante
  currentImg.style.display = "inline-block";

  
  document.getElementById("next").onclick = function () {
    clearTimeout(started);

    console.log("next");
    if (p < imgIndex) {
      p++;
      currentImg = img[p];
      
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');      //$("#title").text(currentImg.attr("title"));
    } else if ((p = imgIndex)) {
      p = 0;

      currentImg = img[p];
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');
    }
    started = setTimeout(slideImg, 5000);
  };

  document.getElementById("prev").onclick = function () {
    clearTimeout(started);

    console.log("prev");
    if (p > 0) {
      p--;
      currentImg = img[p];
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');
    } else if (p <= 0) {
      p = imgIndex;
      currentImg = img[p];
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');
    }
    started = setTimeout(slideImg, 5000);
  };

  var started;
  var is_running = 0;

  function slideImg() {
    console.log('slideimg');
    if (p < imgIndex) {
      p++;
      currentImg = img[p];
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');
    } else if (p == imgIndex) {
      p = 0;
      currentImg = img[p];
      for (var i = 0, length = img.length; i < length; i++) {
        img[i].style.display = "none";
      }
      currentImg.style.display = "inline-block";
      document.getElementById('title').innerHTML = currentImg.getAttribute('title');
    }
    started = setTimeout(slideImg, 5000);
  }

  function startSlider() {
    if (!is_running) {
      is_running = 1;
      slideImg();
    }
  }

  startSlider();

