(function (ext) {
	var ExtName = 'Alert';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            [' ', 'Alert %s', 'secId1'],
	            ['r', 'Prompt %s', 'secId2'],
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
