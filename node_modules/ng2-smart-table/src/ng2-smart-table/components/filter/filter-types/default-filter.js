"use strict";
var core_1 = require('@angular/core');
var DefaultFilter = (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new core_1.EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription)
            this.changesSubscription.unsubscribe();
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    DefaultFilter.propDecorators = {
        'query': [{ type: core_1.Input },],
        'inputClass': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Output },],
    };
    return DefaultFilter;
}());
exports.DefaultFilter = DefaultFilter;
//# sourceMappingURL=default-filter.js.map