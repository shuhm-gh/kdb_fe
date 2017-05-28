"use strict";
var core_1 = require('@angular/core');
var CheckboxSelectAllComponent = (function () {
    function CheckboxSelectAllComponent() {
    }
    CheckboxSelectAllComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
                },] },
    ];
    /** @nocollapse */
    CheckboxSelectAllComponent.ctorParameters = function () { return []; };
    CheckboxSelectAllComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'isAllSelected': [{ type: core_1.Input },],
    };
    return CheckboxSelectAllComponent;
}());
exports.CheckboxSelectAllComponent = CheckboxSelectAllComponent;
//# sourceMappingURL=checkbox-select-all.component.js.map