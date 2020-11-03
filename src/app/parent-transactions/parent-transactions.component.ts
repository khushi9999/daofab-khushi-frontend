import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { Page } from '../model/page';
import { ColumnMode } from '@swimlane/ngx-datatable/';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-parent-transactions',
    templateUrl: './parent-transactions.component.html',
    styleUrls: ['./parent-transactions.component.css'],
    encapsulation: ViewEncapsulation.None

})

export class ParentTransactionsComponent implements OnInit {

    page = new Page();
    rows: any;
    columns = [{ name: 'id' }, { name: 'receiver' }, { name: 'sender' }, { name: 'totalAmount' }, { name: 'paidAmount' }];
    ColumnMode = ColumnMode;

    constructor(private transactionsService: TransactionsService, private router: Router, private httpClient: HttpClient) {
        this.page.pageNumber = 0;
        this.page.size = 2;
    }

    ngOnInit() {
        this.setPage({ offset: 0 });
        this.fetchData(this.page.size, this.page.pageNumber);
    }

    callChild(row) {
        this.transactionsService.selectedId = row.id;
        this.router.navigate(['child']);
        console.error(`called child ${JSON.stringify(row)}`);
    }

    /**
     * Populate the table with new data bas on the page number
     * @param page The page to select
     */
    setPage(pageInfo) {
        console.error(`page info:${JSON.stringify(pageInfo)}`);
        this.page.pageNumber = pageInfo.offset;
        this.fetchData(this.page.size, this.page.pageNumber);
    }

    fetchData(limit, page) {
        const url = 'http://localhost:8080/parents/';
        const param = {
            limit: limit.toString(),
            page: page.toString()
        };

        this.httpClient.get(url, {
            params: param,
            observe: 'response'
        }).toPromise()
            .then(response => {
                console.log(response);
                const data = response.body as any;
                console.log(`rows:${JSON.stringify(data)}`);
                this.rows = data.data;
                this.page.totalElements = data.totalRecords;
                this.page.totalPages = Math.ceil(data.totalRecords / this.page.size);
            })
            .catch(console.log);
    }

}
