"use strict";
var core_1 = require('@angular/core');
var AddButtonComponent = (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new core_1.EventEmitter();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source
            });
        }
        else
            this.grid.createFormShown = true;
    };
    AddButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-add-button]',
                    template: "\n    <a *ngIf=\"grid.getSetting('actions.add')\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"grid.getSetting('add.addButtonContent')\" (click)=\"onAdd($event)\"></a>\n  "
                },] },
    ];
    /** @nocollapse */
    AddButtonComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    AddButtonComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'create': [{ type: core_1.Output },],
    };
    return AddButtonComponent;
}());
exports.AddButtonComponent = AddButtonComponent;
//# sourceMappingURL=add-button.component.js.map