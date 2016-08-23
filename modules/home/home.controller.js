(function () { 
	'use strict';
	angular.module('socketApp.home')
	.controller('HomeController', ['$scope', 'HomeService' ,HomeController]);
	                                    
	function HomeController($scope, HomeService ) {
		$scope.file=null;		
		 $scope.size=0;
		 $scope.fileUploading=false;
		 $scope.percentUploaded=0;
		 
		$scope.fileChanged=function(e){
			$scope.file=e.target.files[0];
			console.log($scope.file);
			$scope.$digest();
		};
		 $scope.uploadFile= function() {
			 console.log($scope.file);
			 if($scope.file){
				 $scope.size=0;
				 $scope.fileUploading=true;
				 HomeService.uploadFile($scope.file,$scope.handleProgress);	
			 }
					
		 };
		 
		 $scope.handleProgress = function(chunk) {
			  $scope.size += chunk.length;
			  $scope.percentUploaded=Math.floor($scope.size / $scope.file.size * 100);	 
			  $scope.$digest();
		 };
		
	}
})();