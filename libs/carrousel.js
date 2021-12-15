$(function () {
  var img = $("#carrousel img"),
    currentImg = img.eq(0), //selectionne la premiere image du carrousel
    imgIndex = img.length - 1; // on definit l'index

  var div = $("#bandeau .click"),
    currentDiv = div.eq(0), //selectionne la premiere image du carrousel
    divIndex = div.length - 1; // on definit l'index
	console.log(div);
	console.log(currentDiv);
	console.log(divIndex);

  var i = 0; //on instancie un compteur

  //('head').append( ('<link rel="stylesheet" type="text/css" />').attr('href', 'libs/carrousel.css') ); //importe le css
  //('#carrousel').append('<div id="menu"><button id="prev"><</button><button id="next">></button> </div>');// Bouton de navigation
  $("#carrousel").append('<button id="prev" class="buttonnav"><</button>'); // Bouton de navigation
  $("#carrousel").append('<button id="next" class="buttonnav">></button>'); // Bouton de navigation
  $("#carrousel").append(
    '<div id="imgtitle"><p id="title">' +
      currentImg.attr("title") +
      "</p></div>"
  ); // sous titre Texte

  img.css("display", "none");
  currentImg.css("display", "inline-block");

  $("#next").click(function () {
    clearTimeout(started);

    console.log("next");
    if (i < imgIndex) {
      i++;
      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
    } else if ((i = imgIndex)) {
      i = 0;

      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
    }
	started = setTimeout(slideImg, 5000);
  });

  $("#prev").click(function () {
    clearTimeout(started);


    console.log("prev");
    if (i > 0) {
      i--;
      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
    } else if (i <= 0) {
      i = imgIndex;
      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
    }
	started = setTimeout(slideImg, 5000);
  });

  var started;
  var is_running = 0;

  function slideImg() {
    if (i < imgIndex) {
      i++;
      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
    } else if (i == imgIndex) {
      i = 0;
      currentImg = img.eq(i);
      img.css("display", "none");
      currentImg.css("display", "inline-block");
      $("#title").text(currentImg.attr("title"));
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
});
