(function() {
	'use strict';
	 angular.module('socketApp.home')
	 .directive('fileChange', function() {
		  return {
		    restrict: 'A',
		    link: function (scope, element, attrs) {
		      var onChangeHandler = scope.$eval(attrs.fileChange);
		      element.bind('change', onChangeHandler);
		    }
		  };
		});

})();