$(document).ready(function() {
//actions that happen immediately after document is loaded

	console.log("ready");
	//Upon click expand examples
	$('.expand')
	   .click(function() {
	   
	  		console.log("the examples will be shown");

			$('.examplelist').toggle('drop');
	  		$(this).text($(this).text() == 'Expand' ? 'Close' : 'Expand');

	  	});

	$( "#add-items" )
		.keydown(function(event) {
  			if (event.which==13) {
    			event.preventDefault();
   				console.log( "add a new item")  ;
   				var insertions = $(this).val();
   				$(this).val("");

   				$(".shopping-menu").append("<p class='inserts'>"+insertions+"</p>");		}
	})




	});
