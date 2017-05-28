"use strict";
var core_1 = require('@angular/core');
var Ng2SmartTableTheadComponent = (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new core_1.EventEmitter();
        this.selectAllRows = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.filter = new core_1.EventEmitter();
    }
    Ng2SmartTableTheadComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-thead]',
                    templateUrl: './thead.component.html'
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableTheadComponent.ctorParameters = function () { return []; };
    Ng2SmartTableTheadComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'isAllSelected': [{ type: core_1.Input },],
        'createConfirm': [{ type: core_1.Input },],
        'sort': [{ type: core_1.Output },],
        'selectAllRows': [{ type: core_1.Output },],
        'create': [{ type: core_1.Output },],
        'filter': [{ type: core_1.Output },],
    };
    return Ng2SmartTableTheadComponent;
}());
exports.Ng2SmartTableTheadComponent = Ng2SmartTableTheadComponent;
//# sourceMappingURL=thead.component.js.map