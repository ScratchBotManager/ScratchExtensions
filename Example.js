(function (ext) {
	var ExtName = 'Test';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            [' ', 'Test Block', 'secId1'],
	        ],
			menus: {
			},
	        url: ''
	};
	ext.secId1 = function(ext,callback){
		alert("Hi");
		callback();
	};
	ScratchExtensions.register(ExtName, descriptor, ext);
})({});
