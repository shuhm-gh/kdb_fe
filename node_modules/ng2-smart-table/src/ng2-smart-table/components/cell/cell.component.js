"use strict";
var core_1 = require('@angular/core');
var CellComponent = (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new core_1.EventEmitter();
    }
    CellComponent.prototype.onEdited = function (event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    };
    CellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-smart-table-cell',
                    template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
                },] },
    ];
    /** @nocollapse */
    CellComponent.ctorParameters = function () { return []; };
    CellComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'row': [{ type: core_1.Input },],
        'editConfirm': [{ type: core_1.Input },],
        'createConfirm': [{ type: core_1.Input },],
        'isNew': [{ type: core_1.Input },],
        'cell': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'mode': [{ type: core_1.Input },],
        'isInEditing': [{ type: core_1.Input },],
        'edited': [{ type: core_1.Output },],
    };
    return CellComponent;
}());
exports.CellComponent = CellComponent;
//# sourceMappingURL=cell.component.js.map