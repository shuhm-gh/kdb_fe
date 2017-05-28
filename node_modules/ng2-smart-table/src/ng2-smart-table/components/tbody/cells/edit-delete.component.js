"use strict";
var core_1 = require('@angular/core');
var TbodyEditDeleteComponent = (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.editRowSelect = new core_1.EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-st-tbody-edit-delete',
                    template: "\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.edit')\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"grid.getSetting('edit.editButtonContent')\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.delete')\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"grid.getSetting('delete.deleteButtonContent')\" (click)=\"onDelete($event)\"></a>\n  "
                },] },
    ];
    /** @nocollapse */
    TbodyEditDeleteComponent.ctorParameters = function () { return []; };
    TbodyEditDeleteComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'row': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'deleteConfirm': [{ type: core_1.Input },],
        'editConfirm': [{ type: core_1.Input },],
        'edit': [{ type: core_1.Output },],
        'delete': [{ type: core_1.Output },],
        'editRowSelect': [{ type: core_1.Output },],
    };
    return TbodyEditDeleteComponent;
}());
exports.TbodyEditDeleteComponent = TbodyEditDeleteComponent;
//# sourceMappingURL=edit-delete.component.js.map