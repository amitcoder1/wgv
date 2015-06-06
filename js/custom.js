jQuery(document).ready(function(){
	/*$('#exampleInputEmail1').addClass('hideMe');
	$('#exampleInputEmail1').css('visibility','hidden');*/
	$('.top_button a').click(function(){
		$('body,html').animate({
				scrollTop: 0
			}, 800);
		return false;		
	});
	jQuery('#glyphicon-searchBox').on('click',function(){
		if(jQuery('#glyphicon-searchBox').data('search')==false){
			jQuery('.inovation_search').addClass('open-search-box');
			jQuery('#glyphicon-searchBox').data('search',true);
		}
		else{
			jQuery('.inovation_search').removeClass('open-search-box');
			jQuery('#glyphicon-searchBox').data('search',false);
		}
	});
	/* $('#glyphicon-searchBox').click(function(){
		if($('#exampleInputEmail1').hasClass('hideMe')){
			$('#exampleInputEmail1').addClass('showMe');
			$('#exampleInputEmail1').removeClass('hideMe');
			$('#exampleInputEmail1').css({opacity: "1.0", visibility: "visible"}).animate({opacity: 1}, 200);
		}else{
			$('#exampleInputEmail1').addClass('hideMe');
			$('#exampleInputEmail1').removeClass('showMe');
			$('#exampleInputEmail1').css({opacity: "1.0", visibility: "hidden"}).animate({opacity: 1}, 200);
		}
	}); */
});