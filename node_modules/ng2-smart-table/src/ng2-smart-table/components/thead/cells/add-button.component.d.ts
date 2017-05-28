import { EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
export declare class AddButtonComponent implements AfterViewInit {
    private ref;
    grid: Grid;
    source: any;
    create: EventEmitter<any>;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
    onAdd(event: any): void;
}
