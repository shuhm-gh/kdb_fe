"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var default_filter_1 = require('./default-filter');
var SelectFilterComponent = (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        _super.call(this);
        this.inputControl = new forms_1.FormControl();
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'select-filter',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"query\"\n            [formControl]=\"inputControl\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectFilterComponent.ctorParameters = function () { return []; };
    return SelectFilterComponent;
}(default_filter_1.DefaultFilter));
exports.SelectFilterComponent = SelectFilterComponent;
//# sourceMappingURL=select-filter.component.js.map