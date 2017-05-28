"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var edit_cell_default_1 = require('./edit-cell-default');
var CustomEditComponent = (function (_super) {
    __extends(CustomEditComponent, _super);
    function CustomEditComponent(resolver) {
        _super.call(this);
        this.resolver = resolver;
    }
    CustomEditComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
            this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
            this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
        }
    };
    CustomEditComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomEditComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'table-cell-custom-editor',
                    template: "\n    <template #dynamicTarget></template>\n  ",
                },] },
    ];
    /** @nocollapse */
    CustomEditComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    CustomEditComponent.propDecorators = {
        'dynamicTarget': [{ type: core_1.ViewChild, args: ['dynamicTarget', { read: core_1.ViewContainerRef },] },],
    };
    return CustomEditComponent;
}(edit_cell_default_1.EditCellDefault));
exports.CustomEditComponent = CustomEditComponent;
//# sourceMappingURL=custom-edit.component.js.map