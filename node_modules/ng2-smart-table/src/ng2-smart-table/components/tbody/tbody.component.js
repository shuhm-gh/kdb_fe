"use strict";
var core_1 = require('@angular/core');
var Ng2SmartTableTbodyComponent = (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.edited = new core_1.EventEmitter();
        this.userSelectRow = new core_1.EventEmitter();
        this.editRowSelect = new core_1.EventEmitter();
        this.multipleSelectRow = new core_1.EventEmitter();
    }
    Ng2SmartTableTbodyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[ng2-st-tbody]',
                    templateUrl: './tbody.component.html'
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableTbodyComponent.ctorParameters = function () { return []; };
    Ng2SmartTableTbodyComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'deleteConfirm': [{ type: core_1.Input },],
        'editConfirm': [{ type: core_1.Input },],
        'save': [{ type: core_1.Output },],
        'cancel': [{ type: core_1.Output },],
        'edit': [{ type: core_1.Output },],
        'delete': [{ type: core_1.Output },],
        'edited': [{ type: core_1.Output },],
        'userSelectRow': [{ type: core_1.Output },],
        'editRowSelect': [{ type: core_1.Output },],
        'multipleSelectRow': [{ type: core_1.Output },],
    };
    return Ng2SmartTableTbodyComponent;
}());
exports.Ng2SmartTableTbodyComponent = Ng2SmartTableTbodyComponent;
//# sourceMappingURL=tbody.component.js.map