"use strict";
var core_1 = require('@angular/core');
var DefaultEditor = (function () {
    function DefaultEditor() {
        this.onStopEditing = new core_1.EventEmitter();
        this.onEdited = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
    }
    DefaultEditor.propDecorators = {
        'cell': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'onStopEditing': [{ type: core_1.Output },],
        'onEdited': [{ type: core_1.Output },],
        'onClick': [{ type: core_1.Output },],
    };
    return DefaultEditor;
}());
exports.DefaultEditor = DefaultEditor;
//# sourceMappingURL=default-editor.js.map