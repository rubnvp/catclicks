var clicks = 0;

$('img').click(function(e){
	clicks++;
	$('#clicks').html(clicks);
});