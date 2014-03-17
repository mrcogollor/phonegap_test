function autoPlayVideo(vcode, width, height){
  $("#video").append('<iframe id="video" width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+vcode+'?autoplay=1" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}

$('.play').on('click', function(e) {
    e.preventDefault();
    autoPlayVideo('gDv8KbITaLg','476','272');
    $('#video').css('margin-top','0px');
    $('#video').show();
});

$('.cars li').on('mouseenter', function(e) {
	var _self = $(this);
    e.preventDefault();
    _self.children().children().stop().animate({
        top: '80px'
    }, 500, function() {	
    	console.log($(this).children().children());
		_self.children().children().css('top','-80px');
		_self.children().children().animate({
		        top: '10px'
		    }, 500);
    })     
});