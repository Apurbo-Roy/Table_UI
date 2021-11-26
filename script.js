var properties = [
	'id',
	'name',
	'score',
	'Product',
	'value',
	'dis',
	'time',
	'status',
	'deldate',
	'hidden',
];

$.each( properties, function( i, val ) {
	
	var orderClass = '';

	$("#" + val).click(function(e){
		e.preventDefault();
		$('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
  		$(this).toggleClass('filter__link--active');
   		$('.filter__link').removeClass('asc desc');

   		if(orderClass == 'desc' || orderClass == '') {
    			$(this).addClass('asc');
    			orderClass = 'asc';
       	} else {
       		$(this).addClass('desc');
       		orderClass = 'desc';
       	}

		var parent = $(this).closest('.header__item');
    	var index = $(".header__item").index(parent);
		var $table = $('.table-content');
		var rows = $table.find('.table-row').get();
		var isSelected = $(this).hasClass('filter__link--active');
		var isNumber = $(this).hasClass('filter__link--number');
			
		rows.sort(function(a, b){

			var x = $(a).find('.table-data').eq(index).text();
    			var y = $(b).find('.table-data').eq(index).text();
				
			if(isNumber == true) {
    					
				if(isSelected) {
					return x - y;
				} else {
					return y - x;
				}

			} else {
			
				if(isSelected) {		
					if(x < y) return -1;
					if(x > y) return 1;
					return 0;
				} else {
					if(x > y) return -1;
					if(x < y) return 1;
					return 0;
				}
			}
    		});

		$.each(rows, function(index,row) {
			$table.append(row);
		});

		return false;
	});

});
$("#filter").keyup(function() {

	// Retrieve the input field text and reset the count to zero
	var filter = $(this).val(),
	  count = 0;

	// Loop through the comment list
	$('#search div').each(function() {


	  // If the list item does not contain the text phrase fade it out
	  if ($(this).text().search(new RegExp(filter, "i")) < 0) {
		$(this).hide();  // MY CHANGE

		// Show the list item if the phrase matches and increase the count by 1
	  } else {
		$(this).show(); // MY CHANGE
		count++;
	  }

	});

  });
  $(document).ready(function(){
	$(data).toggle();
	$(click).click(function(){
	  $(data).toggle();
	});
	$(data1).toggle();
	 $(click1).click(function(){
	  $(data1).toggle();
	});
	$(data2).toggle();
	 $(click2).click(function(){
	  $(data2).toggle();
	});
	$(data3).toggle();
	 $(click3).click(function(){
	  $(data3).toggle();
	});
	$(data4).toggle();
	 $(click4).click(function(){
	  $(data4).toggle();
	});
	$(data5).toggle();
	 $(click5).click(function(){
	  $(data5).toggle();
	});
	$(data6).toggle();
	 $(click6).click(function(){
	  $(data6).toggle();
	});
	$(data7).toggle();
	 $(click7).click(function(){
	  $(data7).toggle();
	});
	$(data8).toggle();
	 $(click8).click(function(){
	  $(data8).toggle();
	});
	$(data9).toggle();
	 $(click9).click(function(){
	  $(data9).toggle();
	});
	$(data10).toggle();
	 $(click10).click(function(){
	  $(data10).toggle();
	});
	$(data11).toggle();
	 $(click11).click(function(){
	  $(data11).toggle();
	});
	$(data12).toggle();
	 $(click12).click(function(){
	  $(data12).toggle();
	});
	$(data13).toggle();
	 $(click13).click(function(){
	  $(data13).toggle();
	});
	$(data14).toggle();
	 $(click14).click(function(){
	  $(data14).toggle();
	});
	$(data15).toggle();
	 $(click15).click(function(){
	  $(data15).toggle();
	});
	$(data16).toggle();
	 $(click16).click(function(){
	  $(data16).toggle();
	});
	$(data17).toggle();
	 $(click17).click(function(){
	  $(data17).toggle();
	});
	$(data18).toggle();
	 $(click18).click(function(){
	  $(data18).toggle();
	});
	$(data19).toggle();
	 $(click19).click(function(){
	  $(data19).toggle();
	});
	$(data20).toggle();
	 $(click20).click(function(){
	  $(data20).toggle();
	});
	$(data21).toggle();
	 $(click21).click(function(){
	  $(data21).toggle();
	});
	$(data22).toggle();
	 $(click22).click(function(){
	  $(data22).toggle();
	});
	$(data23).toggle();
	 $(click23).click(function(){
	  $(data23).toggle();
	});
	$(data24).toggle();
	 $(click24).click(function(){
	  $(data24).toggle();
	});
	$(data25).toggle();
	 $(click25).click(function(){
	  $(data25).toggle();
	});
	$(data26).toggle();
	 $(click26).click(function(){
	  $(data26).toggle();
	});
  });
  