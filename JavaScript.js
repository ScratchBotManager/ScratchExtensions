class Javascript {
    //Converted from https://scratchbotmanager.github.io/ScratchExtensions/JavaScript.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "Javascript",
            "name": "Javascript",
            "blocks": [{
                "opcode": "secId1",
                "blockType": "command",
                "text": "Run [ext]",
                "arguments": {
                    "ext": {
                        "type": "string"
                    }
                }
            }, {
                "opcode": "secId2",
                "blockType": "reporter",
                "text": "Javascript Function [ext]",
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
        ext,
        callback
    }) {
        
        callback(ext);
    }
    secId2({
        ext,
        callback
    }) {
       var code = "function anonymous() {" + ext + "}";
        callback(code);
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
Scratch.extensions.register(new Javascript());
