"use strict";
var core_1 = require('@angular/core');
var TheadFormRowComponent = (function () {
    function TheadFormRowComponent() {
        this.create = new core_1.EventEmitter();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    TheadFormRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-thead-form-row]',
                    template: "\n      <td *ngIf=\"grid.isMultiSelectVisible()\"></td>\n      <td class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"grid.getSetting('add.inputClass')\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n    "
                },] },
    ];
    /** @nocollapse */
    TheadFormRowComponent.ctorParameters = function () { return []; };
    TheadFormRowComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'row': [{ type: core_1.Input },],
        'createConfirm': [{ type: core_1.Input },],
        'create': [{ type: core_1.Output },],
    };
    return TheadFormRowComponent;
}());
exports.TheadFormRowComponent = TheadFormRowComponent;
//# sourceMappingURL=thead-form-row.component.js.map