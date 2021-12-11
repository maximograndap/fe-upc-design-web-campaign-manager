import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './accesss/login/login.component';
import { ProductsComponent } from './pages/maintenances/products/products.component';
import { CampaignsComponent } from './pages/maintenances/campaigns/campaigns.component';
import { MaintenancesComponent } from './pages/maintenances/maintenances.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ProductDetailComponent } from './pages/maintenances/products/product-detail/product-detail.component';
import { BonosreportsComponent } from './pages/reports/bonosreports/bonosreports.component';
import { CampaingsreportsComponent } from './pages/reports/campaingsreports/campaingsreports.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CampaignDetailComponent } from './pages/maintenances/campaigns/campaign-detail/campaign-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CampaignConfigComponent } from './pages/maintenances/campaigns/campaign-config/campaign-config.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ProductsComponent,
    CampaignsComponent,
    MaintenancesComponent,
    UserInfoComponent,
    NotFoundComponent,
    ProductDetailComponent,
    BonosreportsComponent,
    CampaingsreportsComponent,
    ReportsComponent,
    CampaignDetailComponent,
    CampaignConfigComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
