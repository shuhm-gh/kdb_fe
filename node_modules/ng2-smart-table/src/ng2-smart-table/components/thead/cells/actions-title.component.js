"use strict";
var core_1 = require('@angular/core');
var ActionsTitleComponent = (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-actions-title]',
                    template: "\n    <div class=\"ng2-smart-title\">{{ grid.getSetting('actions.columnTitle') }}</div>\n  "
                },] },
    ];
    /** @nocollapse */
    ActionsTitleComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ActionsTitleComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
    };
    return ActionsTitleComponent;
}());
exports.ActionsTitleComponent = ActionsTitleComponent;
//# sourceMappingURL=actions-title.component.js.map