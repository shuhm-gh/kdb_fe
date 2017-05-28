"use strict";
var core_1 = require('@angular/core');
var CustomViewComponent = (function () {
    function CustomViewComponent(resolver) {
        this.resolver = resolver;
    }
    CustomViewComponent.prototype.ngOnInit = function () {
        if (this.cell && !this.customComponent) {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.value = this.cell.getValue();
        }
    };
    CustomViewComponent.prototype.ngOnDestroy = function () {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    };
    CustomViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'custom-view-component',
                    template: "\n    <template #dynamicTarget></template>\n  ",
                },] },
    ];
    /** @nocollapse */
    CustomViewComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    CustomViewComponent.propDecorators = {
        'cell': [{ type: core_1.Input },],
        'dynamicTarget': [{ type: core_1.ViewChild, args: ['dynamicTarget', { read: core_1.ViewContainerRef },] },],
    };
    return CustomViewComponent;
}());
exports.CustomViewComponent = CustomViewComponent;
//# sourceMappingURL=custom-view.component.js.map