"use strict";
var core_1 = require('@angular/core');
var FilterComponent = (function () {
    function FilterComponent() {
        this.inputClass = '';
        this.filter = new core_1.EventEmitter();
        this.query = '';
    }
    FilterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (elements) {
            var filterConf = _this.source.getFilter();
            if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                _this.query = '';
            }
        });
    };
    FilterComponent.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction()
        });
    };
    FilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-smart-table-filter',
                    styleUrls: ['filter.scss'],
                    template: "\n    <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FilterComponent.ctorParameters = function () { return []; };
    FilterComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Output },],
    };
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map