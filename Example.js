class Test {
    //Converted from https://scratchbotmanager.github.io/ScratchExtensions/Example.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "Test",
            "name": "Test",
            "blocks": [{
                "opcode": "secId1",
                "blockType": "command",
                "text": "Test Block",
                "arguments": {}
            }],
            "menus": {}
        };
    }
    secId1({
        ext,
        callback
    }) {
        alert("Hi");
        callback();
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
Scratch.extensions.register(new Test());
