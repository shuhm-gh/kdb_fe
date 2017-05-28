"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_completer_1 = require('ng2-completer');
var ng2_smart_table_directives_1 = require('./ng2-smart-table.directives');
var cell_component_1 = require('./ng2-smart-table/components/cell/cell.component');
var cell_view_mode_1 = require('./ng2-smart-table/components/cell/cell-view-mode');
var cell_edit_mode_1 = require('./ng2-smart-table/components/cell/cell-edit-mode');
var cell_editors_1 = require('./ng2-smart-table/components/cell/cell-editors');
var filter_component_1 = require('./ng2-smart-table/components/filter/filter.component');
var filter_types_1 = require('./ng2-smart-table/components/filter/filter-types');
var pager_component_1 = require('./ng2-smart-table/components/pager/pager.component');
var thead_directives_1 = require('./ng2-smart-table/components/thead/thead.directives');
var tbody_directives_1 = require('./ng2-smart-table/components/tbody/tbody.directives');
var Ng2SmartTableModule = (function () {
    function Ng2SmartTableModule() {
    }
    Ng2SmartTableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        ng2_completer_1.Ng2CompleterModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule
                    ],
                    declarations: [
                        cell_component_1.CellComponent,
                        cell_view_mode_1.ViewCellComponent,
                        cell_edit_mode_1.DefaultEditComponent,
                        cell_edit_mode_1.CustomEditComponent,
                        cell_view_mode_1.CustomViewComponent,
                        cell_edit_mode_1.EditCellComponent,
                        cell_editors_1.CompleterEditorComponent,
                        cell_editors_1.InputEditorComponent,
                        cell_editors_1.SelectEditorComponent,
                        cell_editors_1.TextareaEditorComponent,
                        cell_editors_1.CheckboxEditorComponent,
                        filter_component_1.FilterComponent,
                        filter_types_1.InputFilterComponent,
                        filter_types_1.SelectFilterComponent,
                        filter_types_1.CheckboxFilterComponent,
                        filter_types_1.CompleterFilterComponent,
                        pager_component_1.PagerComponent
                    ].concat(thead_directives_1.NG2_SMART_TABLE_THEAD_DIRECTIVES, tbody_directives_1.NG2_SMART_TABLE_TBODY_DIRECTIVES, ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES),
                    exports: ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES.slice()
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableModule.ctorParameters = function () { return []; };
    return Ng2SmartTableModule;
}());
exports.Ng2SmartTableModule = Ng2SmartTableModule;
//# sourceMappingURL=ng2-smart-table.module.js.map