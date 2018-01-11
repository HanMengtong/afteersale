$('.quesUl a').click(function(){
	$('.quesCon').hide();
	$('.quesDetail').show();
})
$('.quesBtn').click(function(){
	$('.quesDetail').hide();
	$('.quesCon').show();
})
$('.detailLi').each(function(e,i){
	$(this).click(function(){
		$('.detailLi').removeClass('active');
		$(this).addClass('active');
		$('.detailR').hide();
		$('.detailR').eq(e).show();
	})
})