import { Routes, RouterModule } from '@angular/router';
//import {AnalysisComponent} from './module/view.analysis';
//import { lineChartsComponent } from './charts/lineCharts/lineCharts.component';
import { NavComponent } from './dashboard/nav.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'content',
    component: NavComponent,
    children: [
      //{ path: '', component: DashboardComponent },
      //{ path: 'dashboard', component: DashboardComponent },
      //{ path: 'lineCharts', component: lineChartsComponent },
    ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
