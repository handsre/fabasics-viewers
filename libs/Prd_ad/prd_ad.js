

$(function(){
	$('#fileUpload0').change(function() {
		var file = document.querySelector('input[type="file"]').files[0];
		console.log(file);
		var reader= new FileReader();
  		reader.readAsDataURL(this.files[0]);
  		reader.onload = function(e){
  			console.log(e.target.result);
			$('#bi0').css("background-image",  "url("+e.target.result+" )");
  		}
  	});

  	$('#fileUpload1').change(function() {
		var file = document.querySelector('input[type="file"]').files[0];
		console.log(file);
		var reader= new FileReader();
  		reader.readAsDataURL(this.files[0]);
  		reader.onload = function(e){
  			console.log(e.target.result);
			$('#bi1').css("background-image",  "url("+e.target.result+" )");
  		}
	});

  	 $('#fileUpload2').change(function() {
		var file = document.querySelector('input[type="file"]').files[0];
		console.log(file);
		var reader= new FileReader();
  		reader.readAsDataURL(this.files[0]);
  		reader.onload = function(e){
  			console.log(e.target.result);
			$('#bi2').css("background-image",  "url("+e.target.result+" )");
			
  		}


	});

  	$('#fileUpload3').change(function() {
		var file = document.querySelector('input[type="file"]').files[0];
		console.log(file);
		var reader= new FileReader();
  		reader.readAsDataURL(this.files[0]);
  		reader.onload = function(e){
  			console.log(e.target.result);
			$('#bi3').css("background-image",  "url("+e.target.result+" )");
		
  		}


	});


});
