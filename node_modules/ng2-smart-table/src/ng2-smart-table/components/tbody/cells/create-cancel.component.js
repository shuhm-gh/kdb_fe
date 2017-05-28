"use strict";
var core_1 = require('@angular/core');
var TbodyCreateCancelComponent = (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    TbodyCreateCancelComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"grid.getSetting('edit.saveButtonContent')\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"grid.getSetting('edit.cancelButtonContent')\" (click)=\"onCancelEdit($event)\"></a>\n  "
                },] },
    ];
    /** @nocollapse */
    TbodyCreateCancelComponent.ctorParameters = function () { return []; };
    TbodyCreateCancelComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'row': [{ type: core_1.Input },],
        'editConfirm': [{ type: core_1.Input },],
    };
    return TbodyCreateCancelComponent;
}());
exports.TbodyCreateCancelComponent = TbodyCreateCancelComponent;
//# sourceMappingURL=create-cancel.component.js.map