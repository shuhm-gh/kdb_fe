"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var default_filter_1 = require('./default-filter');
var InputFilterComponent = (function (_super) {
    __extends(InputFilterComponent, _super);
    function InputFilterComponent() {
        _super.call(this);
        this.inputControl = new forms_1.FormControl();
    }
    InputFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe(function (value) { return _this.setFilter(); });
    };
    InputFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'input-filter',
                    template: "\n    <input [(ngModel)]=\"query\"\n           [ngClass]=\"inputClass\"\n           [formControl]=\"inputControl\"\n           class=\"form-control\"\n           type=\"text\" \n           placeholder=\"{{ column.title }}\" />\n  "
                },] },
    ];
    /** @nocollapse */
    InputFilterComponent.ctorParameters = function () { return []; };
    return InputFilterComponent;
}(default_filter_1.DefaultFilter));
exports.InputFilterComponent = InputFilterComponent;
//# sourceMappingURL=input-filter.component.js.map