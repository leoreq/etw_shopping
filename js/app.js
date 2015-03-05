$(document).ready(function() {
//actions that happen immediately after document is loaded

	console.log("ready");
	//Upon click expand examples
	$('.expand')
	   .mousedown(function() {
	   
	  		console.log("the examples will be shown");
	   		$('section.shopping-list').finish().animate(
	  				{'margin-top':'0'},
	  				500,
	  				function(){
	  					//nothing happens when it ends
	  				}
	  		); 
		})

});
