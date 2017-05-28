"use strict";
var core_1 = require('@angular/core');
var EditCellDefault = (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new core_1.EventEmitter();
    }
    EditCellDefault.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellDefault.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        return false;
    };
    EditCellDefault.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    EditCellDefault.propDecorators = {
        'cell': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'edited': [{ type: core_1.Output },],
    };
    return EditCellDefault;
}());
exports.EditCellDefault = EditCellDefault;
//# sourceMappingURL=edit-cell-default.js.map