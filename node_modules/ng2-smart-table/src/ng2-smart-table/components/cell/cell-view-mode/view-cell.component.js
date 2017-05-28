"use strict";
var core_1 = require('@angular/core');
var ViewCellComponent = (function () {
    function ViewCellComponent() {
    }
    ViewCellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'table-cell-view-mode',
                    template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    ViewCellComponent.ctorParameters = function () { return []; };
    ViewCellComponent.propDecorators = {
        'cell': [{ type: core_1.Input },],
    };
    return ViewCellComponent;
}());
exports.ViewCellComponent = ViewCellComponent;
//# sourceMappingURL=view-cell.component.js.map