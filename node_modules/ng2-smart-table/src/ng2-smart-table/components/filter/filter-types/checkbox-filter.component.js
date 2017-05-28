"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var default_filter_1 = require('./default-filter');
var CheckboxFilterComponent = (function (_super) {
    __extends(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        _super.call(this);
        this.filterActive = false;
        this.inputControl = new forms_1.FormControl();
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .debounceTime(this.delay)
            .subscribe(function (checked) {
            _this.filterActive = true;
            var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
            var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
            _this.query = checked ? trueVal : falseVal;
            _this.setFilter();
        });
    };
    CheckboxFilterComponent.prototype.resetFilter = function (event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    };
    CheckboxFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'checkbox-filter',
                    template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\" (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  "
                },] },
    ];
    /** @nocollapse */
    CheckboxFilterComponent.ctorParameters = function () { return []; };
    return CheckboxFilterComponent;
}(default_filter_1.DefaultFilter));
exports.CheckboxFilterComponent = CheckboxFilterComponent;
//# sourceMappingURL=checkbox-filter.component.js.map