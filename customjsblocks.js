class CustomJSBlocks {
    //Converted from https://kyleplo.github.io/scratch-extensions/customjsblocks.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "CustomJSBlocks",
            "name": "Custom JS Blocks",
            "blocks": [{
                "opcode": "createBlock",
                "text": "create block type [type] text [text] function [code]",
                "arguments": {
                    "type": {
                        "type": "string",
                        "menu": "type",
                        "defaultValue": "reporter"
                    },
                    "text": {
                        "type": "string",
                        "defaultValue": "%n + %n"
                    },
                    "code": {
                        "type": "string",
                        "defaultValue": "return a + b;"
                    }
                }
            }],
            "menus": {
                type: this._formatMenu(['stack', 'reporter', 'reporter wait', 'stack wait', 'boolean wait', 'crazy weird']),
            }
        };
    }
    createBlock({
        type,
        text,
        code
    }) {
        blocks.push({
            code: code,
            codename: alpha[blockcount],
            block: [types[type], text, alpha[blockcount]]
        });
        blockcount++;
        load(true)
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
Scratch.extensions.register(new CustomJSBlocks());
