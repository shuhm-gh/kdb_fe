import { EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
export declare class ColumnTitleComponent {
    column: Column;
    source: any;
    sort: EventEmitter<any>;
}
