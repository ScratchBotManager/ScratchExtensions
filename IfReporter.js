(function (ext) {
	var ExtName = 'IfReporter';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            ['r', 'if [if] then [then] else [else]', 'secId1'],
	            ['r', 'if %b then %s else %s', 'secId2'],
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
