import { Routes, RouterModule } from '@angular/router';
//import {AnalysisComponent} from './module/view.analysis';
import { Shop_bookM_dataChartsComponent } from './charts/lineCharts/shop_book-m_data.component';
import { NavComponent } from './dashboard/nav.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_services/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'content',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      //{ path: '', component: DashboardComponent },
      //{ path: 'dashboard', component: DashboardComponent },
      //{ path: 'lineCharts', component: lineChartsComponent },
    ]
  },
  {
    path: '**',
    component: NavComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
