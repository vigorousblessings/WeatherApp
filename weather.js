$(document).ready(function() {
    var lat = '';
		var lon = "";
		
		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};
		
		function success(pos) {
		  var crd = pos.coords;
			
			lat=crd.latitude;
			lon=crd.longitude;
			accuracy=crd.accuracy
		  }

		function error(err) {
		  console.warn(`ERROR(${err.code}): ${err.message}`);
		};
		
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(success, error, options);
		}		
		

		
		function getQuote(){
			$.get( 'https://api.apixu.com/v1//current.json?', 
				{q: lat.toString()+','+lon.toString(),
				key: 'ad8e950db1c84dfa913215044170607'},
				function(data) {
				//country.push(data.current)
					console.log(data)
					$('#name').html(data.location.name);
					$('#region').html(data.location.region);
					$('#country').html(data.location.country);
					$('#timezone').html(data.location.tz_id);
					$('#lat').html(data.location.lat);
					$('#lon').html(data.location.lon);
					$('#localtime').html(data.location.localtime);
					$('#temp_c').html(data.current.temp_c);
					$('#temp_f').html(data.current.temp_f)
					$('#text').html(data.current.condition.text)
					$('#icon').html('<img src="https:'+data.current.condition.icon+'" alt=Weather_img class="img-responsive">')
					$('#wind_mph').html(data.current.wind_mph);
					$('#wind_kph').html(data.current.wind_kph);
					$('#wind_degree').html(data.current.wind_degree);
					$('#wind_dir').html(data.current.wind_dir);
					$('#pressure_mb').html(data.current.pressure_mb);
					$('#pressure_in').html(data.current.pressure_in);
					/*$('#precip_mm').html(data.current.precip_mm);
					$('#precip_in').html(data.current.precip_in);
					$('#humidity').html(data.current.humidity);
					$('#cloud').html(data.current.cloud)
					$('#feelslike_c').html(data.current.feelslike_c);
					$('#feelslike_f').html(data.current.feelslike_f);
					$('#vis_km').html(data.current.vis_km);
					$('#vis_miles').html(data.current.vis_miles);*/

					$('#tempFah').hide();

					$('#switchTemp').on(
					  'click',
					  function() 
					  {
						$('#tempCel, #tempFah').toggle()
					  }
					);
					
					
					
				});
				}

				
				
				//getQuote();
				//console.log(country)
					
				$("#get-location").on("click", function(event){
				event.preventDefault();	
				getQuote();
				var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
					$('body').css("background-color", hue);				
					$("#get-location").css("background-color", hue);
					$("#get-location").css("border-left-color", hue);
					$("#get-location").css("border-right-color", hue);
					$("#get-location").css("border-top-color", hue);
					$("#get-location").css("border-bottom-color", hue);
					$("#switchTemp").css("background-color", hue);
					$("#switchTemp").css("border-color", hue);
					$("i").css("color", hue);
					$(".btn.active.focus, .btn.active:focus, .btn.active:hover, .btn:active.focus, .btn:active:focus, .btn:active:hover").css("border-color", hue);
					$("#quote").css("color", hue);
					$("#quoteBy").css("color", hue);
				//console.log(currentQuote);
            });
        });