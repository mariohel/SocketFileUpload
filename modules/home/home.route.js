(function() {
	'use strict';
	 angular.module('socketApp.home')
	  .config(['$routeProvider', function($routeProvider) {
	  $routeProvider
		  .when('/home', {
			templateUrl: 'modules/home/home.template.html',
			controller: 'HomeController'
		  });	
	  }]);

})();




