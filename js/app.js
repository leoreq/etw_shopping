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
	});
