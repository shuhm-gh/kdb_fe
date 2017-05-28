"use strict";
var core_1 = require('@angular/core');
var EditCellComponent = (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new core_1.EventEmitter();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    EditCellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'table-cell-edit-mode',
                    template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    "
                },] },
    ];
    /** @nocollapse */
    EditCellComponent.ctorParameters = function () { return []; };
    EditCellComponent.propDecorators = {
        'cell': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'edited': [{ type: core_1.Output },],
    };
    return EditCellComponent;
}());
exports.EditCellComponent = EditCellComponent;
//# sourceMappingURL=edit-cell.component.js.map