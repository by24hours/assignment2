$(function() {
	$('#banner>ul').css({left:($('#banner').width()-$('#banner>ul').width())/2 + 'px'});

	var clickIndex = 0;
	var liSize =  $('#banner li').size();
	$('#banner li').click(function(){
		var _index = $(this).index();
		clickIndex = _index;
		$(this).css({'background':'url(images/circle_white.png) center center no-repeat'}).siblings().css({'background':'url(images/circle_gray.png) center center no-repeat'})
		$('#banner img').eq(_index).show().siblings('img').hide();
	})
	
	setInterval(function(){
		clickIndex++;
		if (clickIndex>=liSize) {
			clickIndex = 0;
		}
		$('#banner li').eq(clickIndex).click();
	},2000)
})