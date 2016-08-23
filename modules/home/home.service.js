(function () { 
	'use strict';
	angular.module('socketApp.home')
	.factory('HomeService', [HomeService]);
	
	function HomeService() {	
		  
		var factory = {};	
		var socket = null;			
		
		factory.uploadFile = function (file,progressHandler) {
			if(!socket)
				socket= io.connect('http://localhost:8080');			
				
				var stream = ss.createStream();				
				console.log('file selected : '+file.name);
			    
			    // upload a file to the server.
			    ss(socket).emit('file', stream, {size: file.size , name:file.name});			    
			    var blobStream = ss.createBlobReadStream(file);		
			    blobStream.on('data', function(chunk) {
			    	progressHandler(chunk);
	 			    });			    
			    blobStream.pipe(stream);	
		};		
		
		
		return factory;
	}
})();