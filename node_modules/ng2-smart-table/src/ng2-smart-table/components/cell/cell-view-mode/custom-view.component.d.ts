import { ComponentFactoryResolver, OnInit } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export declare class CustomViewComponent implements OnInit {
    private resolver;
    customComponent: any;
    cell: Cell;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
