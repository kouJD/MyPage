$(function(){
	$("pre").each(function(){
		$(this).addClass("linenums");
		$(this).addClass("prettyprint");
		var a = $(this).html();
			a = a.replace(/</g, "&lt;");
			a = a.replace(/>/g, "&gt;");
			a = a.replace(/\'/g, "&#39;");
			a = a.replace(/\"/g, "&quot;");
			a = a.replace(/{/g, "<span>{</span>");
			a = a.replace(/}/g, "<span>}</span>");
			$(this).html(a);
	})
	$(window).load(function(){	     
	     prettyPrint();
	})
	var app = angular.module('twoApp',[]);
	app.controller('twoCtrl',function($scope){
		$scope.firstName = "John";
		$scope.lastName = "Doe";
	});
});
