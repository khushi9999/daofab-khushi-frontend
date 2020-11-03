import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentTransactionsComponent } from './parent-transactions/parent-transactions.component';
import { ChildTransactionsComponent } from './child-transactions/child-transactions.component';

const routes: Routes = [
    { path: '', component: ParentTransactionsComponent },
    { path: 'home', component: ParentTransactionsComponent },
    { path: 'child', component: ChildTransactionsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
