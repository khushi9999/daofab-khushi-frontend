import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * Transaction service to store parentId.
 */
export class TransactionsService {

    selectedId: any;

    constructor() {
    }
}
