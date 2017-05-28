"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var default_editor_1 = require('./default-editor');
var InputEditorComponent = (function (_super) {
    __extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        _super.call(this);
    }
    InputEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'input-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
                },] },
    ];
    /** @nocollapse */
    InputEditorComponent.ctorParameters = function () { return []; };
    return InputEditorComponent;
}(default_editor_1.DefaultEditor));
exports.InputEditorComponent = InputEditorComponent;
//# sourceMappingURL=input-editor.component.js.map