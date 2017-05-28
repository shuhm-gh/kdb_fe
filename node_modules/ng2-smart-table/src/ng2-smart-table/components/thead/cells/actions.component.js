"use strict";
var core_1 = require('@angular/core');
var ActionsComponent = (function () {
    function ActionsComponent() {
        this.create = new core_1.EventEmitter();
    }
    ActionsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-st-actions',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"grid.getSetting('add.createButtonContent')\" (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"grid.getSetting('add.cancelButtonContent')\" (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  "
                },] },
    ];
    /** @nocollapse */
    ActionsComponent.ctorParameters = function () { return []; };
    ActionsComponent.propDecorators = {
        'grid': [{ type: core_1.Input },],
        'create': [{ type: core_1.Output },],
    };
    return ActionsComponent;
}());
exports.ActionsComponent = ActionsComponent;
//# sourceMappingURL=actions.component.js.map