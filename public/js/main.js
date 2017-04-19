$(document).ready(function(){
	var flag = "by-time-slot";
	$('.get-quote-btn').click(function(){
		$.ajax({
			type: 'post',
			url: '/quote/new',
			dataType: 'json',
			success: function(res) {
				response = JSON.parse(res)
				$('.quote').html(response.quote);
				$('.author').html(response.author);
			},
			error: function(err) {

			}
		});
	});

	// $('#get-sources').click(function(){
	// 	$.ajax({
	// 		type: 'post',
	// 		url: '/news/sources',
	// 		dataType: 'json',
	// 		success: function(res) {
	// 			alert("in success"+res);
	// 			response = JSON.parse(res)
	// 			// alert(response);
	// 			console.log('-------- res: ' + response);
	// 			// //console.log('-------- res: ' + response.author);
	// 			$('.data').html(response);
	// 			// $('.author').html(response.author);
	// 		},
	// 		error: function(err) {
	// 			alert("in error"+err);
	// 		}
	// 	});
	// });

	$('#get-news').click(function(){
		var val =  $(this).val();
		var str = "";
		$.ajax({
			type: 'post',
			url: '/news/getnews',
			data : 'key='+val,
			dataType: 'json',
			success: function(res) {
				 obj = JSON.parse(res);
				obj.articles.forEach( function (arrayItem)
				{
				    str += '<div class="container"><div class="row"><div class="col-sm-4"><div class="news"><div class="img-figure"><div class="cat">'+arrayItem.author+'</div><img src="'+arrayItem.urlToImage+'" class="img-responsive"></div><div class="title"><h3>'+arrayItem.title+'</h3></div><p class="description">'+arrayItem.description+'</p></div></div></div></div>';

				});
				$('#newbysource').html(str);

			},
			error: function(err) {
				alert("in error"+err);
			}
		});
	});

	$('#by-time-slot').show();
	$('#by-frequenc').hide();
	//$('#no_of_days').val(1);
	$('#by_time_slot').val(1);
	$('.btntype').click(function(){

		var v = $(this).attr('rel');
		if(v == "by-time-slot"){
			$('#by-time-slot').show();
			$('#by-frequenc').hide();
			$('#by_time_slot').val(1);
			$('#by_time_frequncy').val(0);
			flag = "by-time-slot";
		}
		if(v == "by-frequency"){
			$('#by-frequenc').show();
			$('#by-time-slot').hide();
			$('#by_time_slot').val(0);
			$('#by_time_frequncy').val(1);
			flag = "by-frequenc";
		}

	});

	$("#patient-schedule").submit(function(){

	    if(flag == "by-time-slot"){
	    	var atLeastOneIsChecked = $('.cbk:checkbox:checked').length;
	    	console.log(atLeastOneIsChecked);
	    	if(atLeastOneIsChecked <= 0){
	    		$("#myModal").modal({                    
			      "backdrop"  : "static",
			      "keyboard"  : true,
			      "show"      : true                     
			    });
	    		return false;
			}
	    }

	    if(flag == "by-frequenc"){
	    	var days = $('#no_of_days').val();
			if(days <= 0){
				$("#daysModal").modal({                    
			      "backdrop"  : "static",
			      "keyboard"  : true,
			      "show"      : true                     
			    });
	    		return false;
			}
	    }
	});

	$('.student_view').click(function(){
		id = $(this).attr('rel');
		return false;
	});
    

});
