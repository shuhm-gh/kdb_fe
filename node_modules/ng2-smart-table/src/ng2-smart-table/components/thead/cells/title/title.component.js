"use strict";
var core_1 = require('@angular/core');
var TitleComponent = (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new core_1.EventEmitter();
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (elements) {
            var sortConf = _this.source.getSort();
            if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id)
                _this.currentDirection = sortConf[0]['direction'];
            else
                _this.currentDirection = '';
            sortConf.forEach(function (fieldConf) {
            });
        });
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction()
            }
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    TitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-smart-table-title',
                    styleUrls: ['./title.component.scss'],
                    template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event, column)\" \n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  "
                },] },
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return []; };
    TitleComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'source': [{ type: core_1.Input },],
        'sort': [{ type: core_1.Output },],
    };
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map