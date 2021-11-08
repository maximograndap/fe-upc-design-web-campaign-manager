import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accesss/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CampaignsComponent } from './pages/maintenances/campaigns/campaigns.component';
import { ProductsComponent } from './pages/maintenances/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'maintenance/products', component: ProductsComponent },
  { path: 'maintenance/campaigns', component: CampaignsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
