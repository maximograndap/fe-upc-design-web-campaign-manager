import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accesss/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { HomeComponent } from './pages/home/home.component';
import { CampaignsComponent } from './pages/maintenances/campaigns/campaigns.component';
import { MaintenancesComponent } from './pages/maintenances/maintenances.component';
import { ProductsComponent } from './pages/maintenances/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BonosreportsComponent } from './pages/reports/bonosreports/bonosreports.component';
import { CampaingsreportsComponent } from './pages/reports/campaingsreports/campaingsreports.component';
import { ReportsComponent } from './pages/reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'maintenances', component: MaintenancesComponent, canActivate:[AuthGuard]  },
  { path: 'maintenances/products', component: ProductsComponent, canActivate:[AuthGuard]  },
  { path: 'maintenances/campaigns', component: CampaignsComponent, canActivate:[AuthGuard]  },
  { path: 'reports', component: ReportsComponent, canActivate:[AuthGuard]  },
  { path: 'reports/bonosreports', component: BonosreportsComponent, canActivate:[AuthGuard]  },
  { path: 'reports/campaingsreports', component: CampaingsreportsComponent, canActivate:[AuthGuard]  },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
