//反馈提交
var adviceJson = {};
$('.adviceContent .submit').click(function(){
	if ($('textarea').val() == '') {
		$('.adviceFailBg').show();
	} else {
		adviceJson.phone = $('.phoneInput').val();
		adviceJson.email = $('.emailInput').val();
		adviceJson.qq = $('.qqInput').val();
		adviceJson.content = $('textarea').val();
		$('.adviceSuccBg').show();
		console.log(adviceJson)
	}
	
})
$('.adviceSuccBg .submit').click(function(){
	$('.adviceSuccBg').hide();
	$('.phoneInput').val('');
	$('.emailInput').val('');
	$('.qqInput').val('');
	$('textarea').val('');
})
$('.adviceSuccBg .closeBtn').click(function(){
	$('.adviceSuccBg').hide();
	$('.phoneInput').val('');
	$('.emailInput').val('');
	$('.qqInput').val('');
	$('textarea').val('');
})
$('.adviceFailBg .submit').click(function(){
	$('.adviceFailBg').hide();
})
$('.adviceFailBg .closeBtn').click(function(){
	$('.adviceFailBg').hide();
})