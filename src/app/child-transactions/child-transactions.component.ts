import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TransactionsService } from '../transactions.service';
import { HttpClient } from '@angular/common/http';
import { Page } from '../model/page';
import { Router } from '@angular/router';

@Component({
    selector: 'app-child-transactions',
    templateUrl: './child-transactions.component.html',
    styleUrls: ['./child-transactions.component.css']
})
export class ChildTransactionsComponent implements OnInit {

    columns = [{ name: 'id' }, { name: 'parentId' }, { name: 'paidAmount' }];
    ColumnMode = ColumnMode;
    rows = [];
    page = new Page();

    constructor(private transactionService: TransactionsService, private httpClient: HttpClient, private router: Router) {
        this.page.pageNumber = 0;
        this.page.size = 10;
    }

    ngOnInit(): void {
        if (!this.transactionService.selectedId) {
            this.router.navigate(['home']);
        } else {
            this.fetchData();
        }
    }

    home(){
        this.router.navigate(['home']);
    }

    setPage(pageInfo) {
        console.error(`page info:${JSON.stringify(pageInfo)}`);
    }

    fetchData() {
        const url = `http://localhost:8080/childs/${this.transactionService.selectedId}`;

        this.httpClient.get(url, {
            observe: 'response'
        }).toPromise()
            .then(response => {
                console.log(response);
                const data = response.body as any;
                console.log(`rows:${JSON.stringify(data)}`);
                this.rows = data ? data : [];
                this.page.totalElements = this.rows.length;
                this.page.totalPages = Math.ceil(this.rows.length / this.page.size);
            })
            .catch(console.log);
    }
}
