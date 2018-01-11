$('#fullpage').fullpage({
	slidesColor:['','','','','#091639'],
	anchors: ['page1', 'page2', 'page3', 'page4'],
	navigation: true
})
var imgDiv = $('.proBannerTop div');
var img = $('.proBannerTop div img');
var arr = [];
for (var i = 0; i < imgDiv.length; i++) {
	var obj = {};
	obj.top = css(imgDiv[i],'top');
	obj.left = css(imgDiv[i],'left');
	obj.width = css(imgDiv[i],'width');
	obj.height = css(imgDiv[i],'height');
	obj.opacity = css(imgDiv[i],'opacity');
	obj.zIndex  = css(imgDiv[i],'zIndex');
	arr.push(obj);
}
function setStyle(){
	for (var i = 0; i < imgDiv.length; i++) {
		mTween(imgDiv[i],{
			top:arr[i].top,
			left:arr[i].left,
			width:arr[i].width,
			height:arr[i].height,
			opacity:arr[i].opacity
		},1000,'backOut')
		mTween(img[i],{
			width:arr[i].width,
			height:arr[i].height
		},500)
		/*img[i].style.width = arr[i].width;
		img[i].style.height = arr[i].height;*/
		imgDiv[i].style.zIndex = arr[i].zIndex; 
	}
}
$('.toLeft').click(function(){
	arr.unshift(arr.pop());	
	setStyle();
})
$('.toRight').click(function(){
	arr.push(arr.shift());
	setStyle();
})






