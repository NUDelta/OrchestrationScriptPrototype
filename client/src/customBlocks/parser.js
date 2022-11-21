import Blockly from 'blockly';
import 'blockly/python';
import blocks from './blocks.json';

const parseBlock = (block) => {
  Blockly.Blocks[block["name"]] = {
    init: function() {
      const content = block["blockContent"];
      for (let i=0; i<content.length; i++) {
        let input = this.appendDummyInput();
        const line = content[i];
        if (typeof line === "string") {
            input.appendField(line);
        }
        else {
            for (let j=0; j<line.length; j++) {
                const word = line[j];
                if (typeof word === "string") {
                    input.appendField(word);
                }
                else if (word["textInput"]) {
                    input.appendField(new Blockly.FieldTextInput(word["textInput"]), word["varName"]);
                }
                else if (word["blockInput"]) {
                    this.appendValueInput(word["blockInput"]).setCheck(word["check"]);
                    input = this.appendDummyInput();
                }
                else {
                    input.appendField(new Blockly.FieldDropdown(word["dropdown"].map((i) => [i, i])), "NAME");
                }
            }
        }
    }
      this.setInputsInline(true);
      this.setOutput(block["output"], null);
      this.setColour(block["color"]);
      this.setTooltip(block["tooltip"]);
      this.setInputsInline(block["inputsInline"]);
    }
  };
}

const values = Object.values(blocks);
for (let i=0; i<values.length; i++) {
    parseBlock(values[i]);
}

let blockSearchData = {};
values.forEach((block) => {
    let str = block["extraSearchText"];
    const blockText = block["blockContent"];
    for (let i = 0; i<blockText.length; i++) {
        const line = blockText[i];
        if (typeof line === "string") {
            str += line;
        }
        else {
            for(let j=0; j<line.length; j++) {
                const word = line[j];
                if (typeof word === "string") {
                    str += word;
                }
                else {
                    if (word["dropdown"]) {
                        str += word["dropdown"].join("");
                    }
                    else if (word["textInput"]) {
                        str += word["textInput"];
                    }
                }
            }
        }
    }
    blockSearchData[block.name] = str;
})

export default blockSearchData;