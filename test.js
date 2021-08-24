(function (ext) {
	var ExtName = 'Test';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            ['r', 'Hello World', 'secId1'],
	            ['r', 'Hello World', 'secId2'],
	            ['r', 'Hello World', 'secId3'],
	            ['r', 'Hello World', 'secId4'],
	            [' ', 'Hello World', 'secId5'],
	        ],
			menus: {
			},
	        url: 'https://scratch.mit.edu'
	};
	ext.secId1 = function(ext,callback){
		
		callback();
	};
	ext.secId2 = function(ext,callback){
		
		callback();
	};
	ext.secId3 = function(ext,callback){
		
		callback();
	};
	ext.secId4 = function(ext,callback){
		
		callback();
	};
	ext.secId5 = function(ext,callback){
		alert("Hello World");
		callback();
	};
	ScratchExtensions.register(ExtName, descriptor, ext);
})({});
