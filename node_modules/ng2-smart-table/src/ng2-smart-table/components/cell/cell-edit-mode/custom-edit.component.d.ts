import { ComponentFactoryResolver, SimpleChanges, OnChanges } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export declare class CustomEditComponent extends EditCellDefault implements OnChanges {
    private resolver;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
