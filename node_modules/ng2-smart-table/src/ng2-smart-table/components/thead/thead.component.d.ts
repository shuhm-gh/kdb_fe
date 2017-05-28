import { EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
export declare class Ng2SmartTableTheadComponent {
    grid: Grid;
    source: any;
    isAllSelected: boolean;
    createConfirm: EventEmitter<any>;
    sort: EventEmitter<any>;
    selectAllRows: EventEmitter<any>;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
}
