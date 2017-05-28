import { EventEmitter, AfterViewInit } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import { Column } from '../../lib/data-set/column';
export declare class FilterComponent implements AfterViewInit {
    column: Column;
    source: DataSource;
    inputClass: string;
    filter: EventEmitter<any>;
    query: string;
    ngAfterViewInit(): void;
    onFilter(query: string): void;
}
