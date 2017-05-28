"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var ng2_completer_1 = require('ng2-completer');
var default_editor_1 = require('./default-editor');
var CompleterEditorComponent = (function (_super) {
    __extends(CompleterEditorComponent, _super);
    function CompleterEditorComponent(completerService) {
        _super.call(this);
        this.completerService = completerService;
        this.completerStr = '';
    }
    CompleterEditorComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CompleterEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'completer-editor',
                    template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    "
                },] },
    ];
    /** @nocollapse */
    CompleterEditorComponent.ctorParameters = function () { return [
        { type: ng2_completer_1.CompleterService, },
    ]; };
    return CompleterEditorComponent;
}(default_editor_1.DefaultEditor));
exports.CompleterEditorComponent = CompleterEditorComponent;
//# sourceMappingURL=completer-editor.component.js.map