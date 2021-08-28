class Alert {
    //Converted from https://scratchbotmanager.github.io/ScratchExtensions/alert.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "Alert",
            "name": "Alert",
            "blocks": [{
                "opcode": "secId1",
                "blockType": "command",
                "text": "Alert [ext]",
                "arguments": {
                    "ext": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "secId2",
                "blockType": "reporter",
                "text": "Prompt [ext]",
                "arguments": {
                    "ext": {
                        "type": "string"
                    }
                }
            }],
            "menus": {}
        };
    }
    secId1({
        ext
    }) {
        return alert(ext);
    }
    secId2({
        ext
    }) {
        var x = prompt(ext);
	return x;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new Alert());
