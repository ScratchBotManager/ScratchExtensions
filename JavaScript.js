(function (ext) {
	var ExtName = 'Javascript';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            [' ', 'Run %s', 'secId1'],
	            ['r', 'Javascript Function %s', 'secId2'],
	        ],
			menus: {
			},
	        url: ''
	};
	ext.secId1 = function(ext,callback){
		
		callback();
	};
	ext.secId2 = function(ext,callback){
		
		callback();
	};
	ScratchExtensions.register(ExtName, descriptor, ext);
})({});
