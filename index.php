<!DOCTYPE html>
<html>



  <head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="style/customcss.css" rel="stylesheet">
    <link href="style/animate.css" rel="stylesheet">
    <script src="style/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="jquery-3.4.1.min.js"></script>
    </head>
    <body class="row">

    	<div class=" col-12 p-0 m-0 main" >

    		
    		
    		<div class=" d-flex justify-content-center pb-4 m-4">


			    		<nav class="navbar navbar-expand-lg  bg-transparent  col-9 position-static menu">
						  <a class="navbar-brand" href="#"><img class="p-0 m-0" style="max-height:90px;" src="pic/logo.png" > </a>
						  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="navbar-toggler-icon"></span>
						  </button>
						  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
						    <ul class="navbar-nav  d-flex justify-content-around">
						      <li class="nav-item">
						        <a class="nav-link" href="index.php">ACCUEIL</a>
						      </li>
						      <li class="nav-item">
						        <a class="nav-link" href="paysages.php">PAYSAGES</a>
						      </li>
						      <li class="nav-item">
						        <a class="nav-link" href="slideshow.php">SLIDESHOW</a>
						      </li>
						      <li class="nav-item">
						        <a class="nav-link" href="#">CONTACT</a>
						      </li>
						    </ul>
						  </div>
						</nav>
			
			</div>



			</div>


    	

    	<div id="second" class="col-12 d-flex flex-wrap p-4 m-4 second" >


    		<div class="row  w-100 justify-content-center p-0 m-0 secondtitle wow fadeInDown">

    			<p class="ph col-12  d-flex justify-content-center m-0  ">bla</p>

    			<h2 class="col-12 d-flex justify-content-center m-0 ">blablabla</h2>
    		</div>


			<div class=" col-12 d-flex flex-wrap justify-content-center p-0 m-0 ">
				<div class="col-9 d-flex patchwork ">

					<div class=" d-flex flex-wrap justify-content-around col-6  p-0  m-0"> 
						<div class="col-6 pb-2 m-0 wow slideInUp">
							<img class="little" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>
						<div class="col-6 pb-2 m-0 wow slideInUp">
							<img class="little" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>

						<div class="col-12 pb-2 m-0 wow slideInUp">
							 <img class="big" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>
						
					</div>


					<div class=" d-flex flex-wrap  col-6  p-0  m-0"> 


						<div class="col-12 pb-2 m-0 wow slideInUp">
							 <img class="big" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>

						<div class="col-6 pb-2 m-0 wow slideInUp">
							<img class="little" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>

						<div class="col-6 pb-2 m-0 wow slideInUp">
							<img class="little" src="pic/arc.jpg" title="Arc en Ciel dans les bas de Jean-petit"> 
						</div>
						
					</div>

				</div>
    		</div>
    	</div>

    	<footer class="footer d-flex">
    		

    	</footer>

	</body>





     <script>

     $(function(){
     	img = $('#slider div'), 
 		currentImg = img.eq(1), //selectionne la premiere image du carrousel
 		imgIndex = img.length -1;
 		var i=1;
 		console.log(img);
 		scroll = 0;

		$(img).addClass("scalepic");
		$(currentImg).removeClass("scalepic");

 		$('#scroller').append('<button id="prev" class="buttonnav"><</button>');// Bouton de navigation
	 	$('#scroller').append('<button id="next" class="buttonnav">></button>');


		$('#next').click(function(e){
			


		 		if(i < imgIndex-1){

		 			console.log(i);
		 			currentImg = img.eq(i)

		 			cimgw = $(currentImg).width();
					console.log("current img width : "+cimgw);

					i++;

					console.log(i);
					nextImg = img.eq(i);
					nimgw = $(nextImg).width();


					$(img).addClass("scalepic");
		 			$(nextImg).removeClass("scalepic");

					scroll += (nimgw+cimgw+200)/2;
					console.log("scroll size " +scroll);
					console.log("next img width : "+nimgw);

		 			$('#slider').scrollLeft( scroll );
		 			/*$('#slider').animate({ scrollLeft: scroll }, 1000);*/
		 			


		 		}
		 		else if(i = imgIndex-1){
		 			i=1;
		 			scroll = 0;

		 			nextImg=img.eq(i);


		 			$(img).addClass("scalepic");
		 			$(nextImg).removeClass("scalepic");

		 			$('#slider').scrollLeft( scroll );
		 			 /*$('#slider').animate({ scrollLeft: scroll }, 1000);*/
		 		}
		 	})

				$('#prev').click(function(e){
			

		 		if(i > 1){

		 			console.log(i);
		 			currentImg = img.eq(i)
		 			cimgw = $(currentImg).width();
					console.log("current img width : "+cimgw);

					i--;

					console.log(i);
					nextImg = img.eq(i);
					nimgw = $(nextImg).width();

					$(img).addClass("scalepic");
		 			$(nextImg).removeClass("scalepic");

					scroll -= (nimgw+cimgw+300)/2;
					console.log("scroll size " +scroll);
					console.log("next img width : "+nimgw);

		 			$('#slider').scrollLeft( scroll );
		 			/*$('#slider').animate({ scrollLeft: scroll }, 1000);*/
		 			


		 		}

		 	})

	});


</script>





      <script src="libs/wow.min.js"></script>
                <script>

                   wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();




              </script>

    </html>
						     