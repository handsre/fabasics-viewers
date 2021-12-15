$(function () {
  var img = document.getElementById("slider").getElementsByTagName("div");
  var currentImg = img[0]; //selectionne la premiere image du carrousel
  var imgIndex = img.length - 1;

  /*
		var img = $('#slider div'),
			currentImg = img.eq(0), //selectionne la premiere image du carrousel
			imgIndex = img.length - 1;
            */
  var i = 0;
  console.log(img);
  var screenWidth = screen.availWidth;
  var containerWidth = document.getElementById("slider").offsetWidth;
    var cimgw = currentImg.querySelector("img").offsetWidth;
  var nimgw = currentImg.offsetWidth;
 var scroll =  0;
 document.getElementById("slider").scrollLeft = scroll;

  for (var p = 0, length = img.length; p < length; p++) {
    img[p].classList.add("scalepic");
  }
  currentImg.classList.remove("scalepic");

  /*
        $(img).addClass("scalepic");
		$(currentImg).removeClass("scalepic");
        */

  let prevBtn = document.createElement("button");
  prevBtn.classList.add("buttonnav");
  prevBtn.append("<");
  prevBtn.setAttribute("id", "prev");
  document.getElementById("scroller").append(prevBtn); // Bouton de navigation

  let nextBtn = document.createElement("button");
  nextBtn.classList.add("buttonnav");
  nextBtn.append(">");
  nextBtn.setAttribute("id", "next");
  document.getElementById("scroller").append(nextBtn); // Bouton de navigation

  //$('#scroller').append('<button id="prev" class="buttonnav"><</button>'); // Bouton de navigation
  //$('#scroller').append('<button id="next" class="buttonnav">></button>');

  $("#next").click(function (e) {
    e.preventDefault();

    if (i < imgIndex) {
      console.log(i);
      currentImg = img[i];

      cimgw = currentImg.querySelector("img").offsetWidth;
      console.log("current img width : " + cimgw);

      i++;

      console.log(i);
      currentImg = img[i];
      nimgw = currentImg.offsetWidth;

      for (var p = 0, length = img.length; p < length; p++) {
        img[p].classList.add("scalepic");
      }
      currentImg.classList.remove("scalepic");
      var containerWidth = document.getElementById("slider").offsetWidth;

      var screenWidth = screen.availWidth;

      var screenFixe = (screenWidth - containerWidth) ;

      scroll +=  (nimgw / 2) + (cimgw / 2);



      console.log("scree size " + screenWidth);
      console.log("scroll size " + scroll);
      console.log("next img width : " + nimgw);

      document.getElementById("slider").scrollLeft = scroll;
    } else if (i == imgIndex) {
      i = 0;
      scroll = 0;

      currentImg = img[i];

      for (var p = 0, length = img.length; p < length; p++) {
        img[p].classList.add("scalepic");
      }
      currentImg.classList.remove("scalepic");
      document.getElementById("slider").scrollLeft = scroll;
    }
  });

  $("#prev").click(function (e) {
    if (i > 0) {
      console.log(i);
      currentImg = img[i];
      cimgw = currentImg.querySelector("img").offsetWidth;
      console.log("current img width : " + cimgw);

      i--;

      console.log(i);
      currentImg = img[i];
      nimgw = currentImg.offsetWidth;

      for (var p = 0, length = img.length; p < length; p++) {
        img[p].classList.add("scalepic");
      }
      currentImg.classList.remove("scalepic");

      scroll -= nimgw / 2 + cimgw / 2;
      console.log("scroll size " + scroll);
      console.log("next img width : " + nimgw);

      document.getElementById("slider").scrollLeft = scroll;

      /*$('#slider').animate({ scrollLeft: scroll }, 1000);*/
    }
  });
});
