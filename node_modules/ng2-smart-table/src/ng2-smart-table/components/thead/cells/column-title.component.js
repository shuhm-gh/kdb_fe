"use strict";
var core_1 = require('@angular/core');
var ColumnTitleComponent = (function () {
    function ColumnTitleComponent() {
        this.sort = new core_1.EventEmitter();
    }
    ColumnTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-st-column-title',
                    template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ColumnTitleComponent.ctorParameters = function () { return []; };
    ColumnTitleComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'sort': [{ type: core_1.Output },],
    };
    return ColumnTitleComponent;
}());
exports.ColumnTitleComponent = ColumnTitleComponent;
//# sourceMappingURL=column-title.component.js.map