import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
export declare class TbodyCreateCancelComponent {
    grid: Grid;
    row: Row;
    editConfirm: EventEmitter<any>;
    onSave(event: any): void;
    onCancelEdit(event: any): void;
}
