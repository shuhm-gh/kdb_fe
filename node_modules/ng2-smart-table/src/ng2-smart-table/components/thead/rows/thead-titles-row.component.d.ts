import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
export declare class TheadTitlesRowComponent {
    grid: Grid;
    isAllSelected: boolean;
    source: any;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
}
