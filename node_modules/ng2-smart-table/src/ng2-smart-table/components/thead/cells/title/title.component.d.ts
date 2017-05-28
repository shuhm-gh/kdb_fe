import { EventEmitter, OnInit } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
export declare class TitleComponent implements OnInit {
    currentDirection: string;
    column: Column;
    source: DataSource;
    sort: EventEmitter<any>;
    ngOnInit(): void;
    _sort(event: any): void;
    changeSortDirection(): string;
}
