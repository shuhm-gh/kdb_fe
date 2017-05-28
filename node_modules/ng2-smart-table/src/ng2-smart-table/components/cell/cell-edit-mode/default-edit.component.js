"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var edit_cell_default_1 = require('./edit-cell-default');
var DefaultEditComponent = (function (_super) {
    __extends(DefaultEditComponent, _super);
    function DefaultEditComponent() {
        _super.call(this);
    }
    DefaultEditComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    DefaultEditComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'table-cell-default-editor',
                    templateUrl: './default-edit.component.html',
                },] },
    ];
    /** @nocollapse */
    DefaultEditComponent.ctorParameters = function () { return []; };
    return DefaultEditComponent;
}(edit_cell_default_1.EditCellDefault));
exports.DefaultEditComponent = DefaultEditComponent;
//# sourceMappingURL=default-edit.component.js.map