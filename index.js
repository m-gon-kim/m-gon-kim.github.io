function backgroundImg(obj, image){
	$(obj).css("background-image","url('"+image+"')");
}

function ResearchReadMore(obj){
	$(obj).parent().parent().parent().children(".researchDetailWrapper").css("display","block");
	$(obj).css("display", "none");
}