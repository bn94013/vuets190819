// JavaScript Document

$(function(){
	
	$("#gotop").click(function(){

		$("html,body").animate({scrollTop:0},900);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});