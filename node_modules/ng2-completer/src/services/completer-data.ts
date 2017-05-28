import {Observable} from "rxjs/Observable";

import {CompleterItem} from "../components/completer-item";

export interface CompleterData extends Observable<CompleterItem[]> {
    search(term: string): void;
    cancel(): void;
    convertToItem?(data: any): CompleterItem;
};
