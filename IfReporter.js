class NitroBlock {
    getInfo() {
        return {
            "id": "IfReporter",
            "name": "IfReporter",
            "blocks": [{
                    "opcode": "IfReporterBlock",
                    "blockType": "reporter",
                    "text": "If [bool] Then [string1] Else [string2]",
                    "arguments": {
                        "bool": {
                            "type": "boolean"
                        },
                        "string1": {
                            "type": "string",
                            "defaultValue": "True"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "False"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    IfReporterBlock({bool, string1, string2}) {
     if (bool = true) {
     return string1
     } else {
      return string2
     }
        
    };
}
