"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var default_editor_1 = require('./default-editor');
var TextareaEditorComponent = (function (_super) {
    __extends(TextareaEditorComponent, _super);
    function TextareaEditorComponent() {
        _super.call(this);
    }
    TextareaEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'textarea-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
                },] },
    ];
    /** @nocollapse */
    TextareaEditorComponent.ctorParameters = function () { return []; };
    return TextareaEditorComponent;
}(default_editor_1.DefaultEditor));
exports.TextareaEditorComponent = TextareaEditorComponent;
//# sourceMappingURL=textarea-editor.component.js.map