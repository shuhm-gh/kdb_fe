import { AfterViewInit, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
export declare class ActionsTitleComponent implements AfterViewInit {
    private ref;
    grid: Grid;
    constructor(ref: ElementRef);
    ngAfterViewInit(): void;
}
