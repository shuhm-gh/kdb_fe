import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
export declare class TbodyEditDeleteComponent {
    grid: Grid;
    row: Row;
    source: any;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    onEdit(event: any): void;
    onDelete(event: any): void;
}
