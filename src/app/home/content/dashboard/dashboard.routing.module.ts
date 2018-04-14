import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashBoardComponent } from './dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeDashBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class HomeDashBoardRoutingModule {}