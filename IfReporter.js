class IfReporter {
    //Converted from https://scratchbotmanager.github.io/ScratchExtensions/IfReporter.js to Scratch 3.0 using Ext2to3!
    getInfo() {
        return {
            "id": "IfReporter",
            "name": "IfReporter",
            "blocks": [{
                "opcode": "secId1",
                "blockType": "reporter",
                "text": "if [ifbool] then [then] else [elsestr]",
                "arguments": {
                    "ifbool": {
                        "type": "Boolean"
                    },
                    "then": {
                        "type": "string"
                    },
                    "elsestr": {
                        "type": "string"
                    }
                }
            }],
            "menus": {}
        };
    }
    secId1({ifbool, then, elsestr})
    if (ifbool == true) {
        return then;
    } else {
        return elsestr;
           }

    }
    }
}
Scratch.extensions.register(new IfReporter());
