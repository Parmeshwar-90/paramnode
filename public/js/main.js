$(document).ready(function(){
	$('.get-quote-btn').click(function(){
		$.ajax({
			type: 'post',
			url: '/quote/new',
			dataType: 'json',
			success: function(res) {
				response = JSON.parse(res)
				//console.log('-------- res: ' + response.quote);
				//console.log('-------- res: ' + response.author);
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
				    //console.log(arrayItem.title);
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
	$('.btntype').click(function(){
		var v = $(this).attr('rel');
		if(v == "by-time-slot"){
			$('#by-time-slot').show();
			$('#by-frequenc').hide();
		}
		if(v == "by-frequency"){
			$('#by-frequenc').show();
			$('#by-time-slot').hide();
		}

	});

	$("#patient-schedule").submit(function(){
	    if($(".cbk").prop('checked') != true){
    		$("#myModal").modal({                    
		      "backdrop"  : "static",
		      "keyboard"  : true,
		      "show"      : true                     
		    });
    		return false;
		}

		var days = $('#no_of_days').val();
		if(days <= 0){
			$("#daysModal").modal({                    
		      "backdrop"  : "static",
		      "keyboard"  : true,
		      "show"      : true                     
		    });
    		return false;
		}

	});
    

});
