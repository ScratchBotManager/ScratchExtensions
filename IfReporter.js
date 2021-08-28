(function (ext) {
	var ExtName = 'IfReporter';
	ext._shutdown = function() {};
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};
	var descriptor = {
	        blocks: [
	            ['r', 'if %b then %s else %s', 'secId1'],
	        ],
			menus: {
			},
	        url: ''
	};
	ext.secId1 = function(ifbool,then,elsestr){
		if (ifbool == true) {return then} else {return elsestr}
		callback();
	};
	ScratchExtensions.register(ExtName, descriptor, ext);
})({});
