$(function(){
	$(".pre").each(function(){
		var a = $(this).html();
			a = a.replace(/</g, "&lt;");
			a = a.replace(/>/g, "&gt;");
			a = a.replace(/\'/g, "&#39;");
			a = a.replace(/\"/g, "&quot;");
			a = a.replace(/{/g, "<span>{</span>");
			a = a.replace(/}/g, "<span>}</span>");
			$(this).html(a);
	})
});
