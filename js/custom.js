jQuery(document).ready(function(){
	$(".select-option").selectbox();
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
});