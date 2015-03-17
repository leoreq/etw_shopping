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
	//Add items to the list
	$( "#add-items" )
		.keydown(function(event) {
  			if (event.which==13) {
    			event.preventDefault();
   				console.log( "add a new item")  ;
   				var insertions = $(this).val();
   				$(this).val("");

   				$(".shopping-selection")
   				.append("<li class='inserts'><p class='inserts-text'>"+insertions+"</p><span class='fa-stack inserts-delete'><i class='fa fa-circle fa-stack-2x'></i><i class='fa fa-times fa-stack-1x fa-inverse'></i></span></li>");		}
	})
	//Remove items from the list
	$('.shopping-selection').on('click', '.inserts-delete', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
		console.log( "remove target item")  ;
  		$(this).closest('li').fadeOut(300);
	});


	});
