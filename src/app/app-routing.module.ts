import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accesss/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CampaignsComponent } from './pages/maintenances/campaigns/campaigns.component';
import { MaintenancesComponent } from './pages/maintenances/maintenances.component';
import { ProductsComponent } from './pages/maintenances/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maintenances', component: MaintenancesComponent },
  { path: 'maintenances/products', component: ProductsComponent },
  { path: 'maintenances/campaigns', component: CampaignsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
