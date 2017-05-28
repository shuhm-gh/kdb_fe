"use strict";
var core_1 = require('@angular/core');
var TheadTitlesRowComponent = (function () {
    function TheadTitlesRowComponent() {
        this.sort = new core_1.EventEmitter();
        this.selectAllRows = new core_1.EventEmitter();
    }
    TheadTitlesRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"grid.isMultiSelectVisible()\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"grid.showActionColumn('left')\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\">\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"grid.showActionColumn('right')\" [grid]=\"grid\"></th>\n    "
                },] },
    ];
    /** @nocollapse */
    TheadTitlesRowComponent.ctorParameters = function () { return []; };
    TheadTitlesRowComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'isAllSelected': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'sort': [{ type: core_1.Output },],
        'selectAllRows': [{ type: core_1.Output },],
    };
    return TheadTitlesRowComponent;
}());
exports.TheadTitlesRowComponent = TheadTitlesRowComponent;
//# sourceMappingURL=thead-titles-row.component.js.map