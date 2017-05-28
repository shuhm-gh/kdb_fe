"use strict";
var core_1 = require('@angular/core');
var TheadFitlersRowComponent = (function () {
    function TheadFitlersRowComponent() {
        this.create = new core_1.EventEmitter();
        this.filter = new core_1.EventEmitter();
    }
    TheadFitlersRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: "\n    <th *ngIf=\"grid.isMultiSelectVisible()\"></th>\n    <th ng2-st-add-button *ngIf=\"grid.showActionColumn('left')\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"grid.getSetting('filter.inputClass')\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"grid.showActionColumn('right')\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"                          \n                          (create)=\"create.emit($event)\">\n    </th>\n    "
                },] },
    ];
    /** @nocollapse */
    TheadFitlersRowComponent.ctorParameters = function () { return []; };
    TheadFitlersRowComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'create': [{ type: core_1.Output },],
        'filter': [{ type: core_1.Output },],
    };
    return TheadFitlersRowComponent;
}());
exports.TheadFitlersRowComponent = TheadFitlersRowComponent;
//# sourceMappingURL=thead-filters-row.component.js.map