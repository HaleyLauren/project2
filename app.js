$(document).ready(function(){
 var assignmentDatabase = 'https://api.myjson.com/bins/d0rkm ';

$.ajax({
 url: assignmentDatabase,
 type: 'GET',
 dataType: 'json',
 cache: false,
 success: function(data) {



	 $.each(data, function(index, value) {

		 var html = '<div class="movieA">' +
			 						'<div class="crashid"><br>crash id:</br>' + value.crashid + '</div>';

		 $('#main-1').append(html);
	 });


	 $.each(data, function(index, value) {

		 // var html = 	'<div class="movieB">' +
			//  							'<div class="occupants">' + value.occupants + ' bodies</div>' +
			//  							'<div class="death"><b>killed:</b> ' + value.death + '</div>' +
			// 						'</div>';



			var html = 	'<div class="movieB">';

			if (value.occupants > 1) {
				html +=				'<div class="occupants">' + value.occupants + ' riders</div>';
			} else {
				html +=				'<div class="occupants">' + value.occupants + ' rider</div>';
			}

			html += 			'<div class="death">' + value.death + ' <b>killed</b></div>';
			html += 		  '</div>';


		 $('#main-2').append(html);
	 });


	 // Default or initialize state
	 $(".movieA").hide();
	 $(".movieB").show();

	 $(document).on("keydown", function(event) {
		 // 87 = W key
		 if (event.which == 87) {
			 $(".movieA").show();
			 $(".movieB").hide();
		 }
	 });

	 $(document).on("keyup", function(event) {
		 // 87 = W key
		 if (event.which == 87) {
			 $(".movieA").hide();
			 $(".movieB").show();
		 }
	 });

	 // $(document).on("keydown", function(event) {
		//  // 87 = W key
		//  if (event.which == 87) {
		// 	 state.movieA = !state.movieA;
		// 	 state.movieB = !state.movieB;
		// 	 synchronizeState();
		//  }
	 // });
	 //
	 // function synchronizeState() {
		//  if (state.movieA) {
		// 	 $(".movieA").show();
		//  } else {
		// 	 $(".movieA").hide();
		//  }
	 //
		//  if (state.movieB) {
		// 	 $(".movieB").show();
		//  } else {
		// 	 $(".movieB").hide();
		//  }
	 // }
 },
});

/*linearSrollingLoop();

function linearSrollingLoop() {

	$('#main-2').animate({
    scrollTop: $(document).height() - $(window).height()
  }, 20000, 'linear', function() {
    $(this).animate({
        scrollTop: 0
      }, 0, 'linear', function() {
				linearSrollingLoop();
      });
    });
}*/

setInterval(function() {
 $('#main-2').toggleClass('siren-blue siren-red');
}, 500)
});
