"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var default_editor_1 = require('./default-editor');
var CheckboxEditorComponent = (function (_super) {
    __extends(CheckboxEditorComponent, _super);
    function CheckboxEditorComponent() {
        _super.call(this);
    }
    CheckboxEditorComponent.prototype.onChange = function (event) {
        var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    };
    CheckboxEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'checkbox-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
                },] },
    ];
    /** @nocollapse */
    CheckboxEditorComponent.ctorParameters = function () { return []; };
    return CheckboxEditorComponent;
}(default_editor_1.DefaultEditor));
exports.CheckboxEditorComponent = CheckboxEditorComponent;
//# sourceMappingURL=checkbox-editor.component.js.map