class Test {
    //Converted from https://scratchbotmanager.github.io/ScratchExtensions/test.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "Test",
            "name": "Test",
            "blocks": [{
                "opcode": "secId1",
                "blockType": "reporter",
                "text": "Hello World",
                "arguments": {}
            }, {
                "opcode": "secId2",
                "blockType": "reporter",
                "text": "Hello World",
                "arguments": {}
            }, {
                "opcode": "secId3",
                "blockType": "reporter",
                "text": "Hello World",
                "arguments": {}
            }, {
                "opcode": "secId4",
                "blockType": "reporter",
                "text": "Hello World",
                "arguments": {}
            }, {
                "opcode": "secId5",
                "blockType": "command",
                "text": "Hello World",
                "arguments": {}
            }],
            "menus": {}
        };
    }
    secId1({
        ext,
        callback
    }) {

        callback();
    }
    secId2({
        ext,
        callback
    }) {

        callback();
    }
    secId3({
        ext,
        callback
    }) {

        callback();
    }
    secId4({
        ext,
        callback
    }) {

        callback();
    }
    secId5({
        ext,
        callback
    }) {
        alert("Hello World");
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
