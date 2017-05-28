"use strict";
var core_1 = require('@angular/core');
var grid_1 = require('./lib/grid');
var data_source_1 = require('./lib/data-source/data-source');
var helpers_1 = require('./lib/helpers');
var local_data_source_1 = require('./lib/data-source/local/local.data-source');
var Ng2SmartTableComponent = (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new core_1.EventEmitter();
        this.userRowSelect = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.deleteConfirm = new core_1.EventEmitter();
        this.editConfirm = new core_1.EventEmitter();
        this.createConfirm = new core_1.EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                position: 'left' // left|right
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10
            }
        };
        this.isAllSelected = false;
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
    };
    Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
        if (this.grid.getSetting('selectMode') === 'multi')
            this.onMultipleSelectRow(row);
        else
            this.onSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this._onUserSelectRow(row.getData());
            this.onSelectRow(row);
        }
    };
    Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
        this.grid.multipleSelectRow(row);
        this._onUserSelectRow(row.getData());
        this._onSelectRow(row.getData());
    };
    Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        var selectedRows = this.grid.getSelectedRows();
        this._onUserSelectRow(selectedRows[0], selectedRows);
        this._onSelectRow(selectedRows[0]);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this._onSelectRow(row.getData());
    };
    Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
        this._onSelectRow(row.getData());
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new grid_1.Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.onSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof data_source_1.DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new local_data_source_1.LocalDataSource(this.source);
        }
        return new local_data_source_1.LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return helpers_1.deepExtend({}, this.defaultSettings, this.settings);
    };
    Ng2SmartTableComponent.prototype.changePage = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.sort = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype.filter = function ($event) {
        this.resetAllSelector();
    };
    Ng2SmartTableComponent.prototype._onSelectRow = function (data) {
        this.rowSelect.emit({
            data: data || null,
            source: this.source,
        });
    };
    Ng2SmartTableComponent.prototype._onUserSelectRow = function (data, selected) {
        if (selected === void 0) { selected = []; }
        this.userRowSelect.emit({
            data: data || null,
            source: this.source,
            selected: selected.length ? selected : this.grid.getSelectedRows(),
        });
    };
    Ng2SmartTableComponent.prototype.resetAllSelector = function () {
        this.isAllSelected = false;
    };
    Ng2SmartTableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng2-smart-table',
                    styleUrls: ['ng2-smart-table.scss'],
                    templateUrl: 'ng2-smart-table.html'
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableComponent.ctorParameters = function () { return []; };
    Ng2SmartTableComponent.propDecorators = {
        'source': [{ type: core_1.Input },],
        'settings': [{ type: core_1.Input },],
        'rowSelect': [{ type: core_1.Output },],
        'userRowSelect': [{ type: core_1.Output },],
        'delete': [{ type: core_1.Output },],
        'edit': [{ type: core_1.Output },],
        'create': [{ type: core_1.Output },],
        'deleteConfirm': [{ type: core_1.Output },],
        'editConfirm': [{ type: core_1.Output },],
        'createConfirm': [{ type: core_1.Output },],
    };
    return Ng2SmartTableComponent;
}());
exports.Ng2SmartTableComponent = Ng2SmartTableComponent;
//# sourceMappingURL=ng2-smart-table.component.js.map