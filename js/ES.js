$(function() {
	var holdNum = 1;
	$(".forward-button").on('click', function() {
		if (holdNum < 3){
			$("div.group-"+holdNum).addClass("deactive").removeClass("active");
		holdNum++;
		$("div.group-"+holdNum).removeClass("deactive").addClass("active");
		}
		$("span.page-number").text(holdNum);


	});
	$(".backward-button").on('click', function() {
		if (holdNum > 1){
		$("div.group-"+holdNum).addClass("deactive").removeClass("active");
		holdNum--;
		$("div.group-"+holdNum).addClass("active").removeClass("deactive");
		}
		$("span.page-number").text(holdNum);
	})


	$("#nav a").on('click', function(e){
		e.preventDefault();
		var url = this.href;

		$("#nav a.current").removeClass("current");
		$(this).addClass("current");

		$("#container").remove();
		$("#content").load(url + '#container');
	})

	$("#nav-classic a").on('click', function(e){
		e.preventDefault();
		var url = this.href;

		$("#nav-classic a.current").removeClass("current");
		$(this).addClass("current");

		$("#container-classic").remove();
		$("#content-classic").load(url + '#container-classic');
	})

});