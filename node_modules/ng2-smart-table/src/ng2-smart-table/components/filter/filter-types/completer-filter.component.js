"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var ng2_completer_1 = require('ng2-completer');
var default_filter_1 = require('./default-filter');
var CompleterFilterComponent = (function (_super) {
    __extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        _super.call(this);
        this.completerService = completerService;
        this.completerContent = new Subject_1.Subject();
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .map(function (ev) { return (ev && ev.title) || ev || ''; })
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '')
            this.completerContent.next(event);
    };
    CompleterFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'completer-filter',
                    template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  "
                },] },
    ];
    /** @nocollapse */
    CompleterFilterComponent.ctorParameters = function () { return [
        { type: ng2_completer_1.CompleterService, },
    ]; };
    return CompleterFilterComponent;
}(default_filter_1.DefaultFilter));
exports.CompleterFilterComponent = CompleterFilterComponent;
//# sourceMappingURL=completer-filter.component.js.map