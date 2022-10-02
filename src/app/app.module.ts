import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './Pages/container/container.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { HospitalComponent } from './Pages/hospital/hospital.component';
import { PromotionComponent } from './Pages/promotion/promotion.component';
import { LaboratoryComponent } from './Pages/laboratory/laboratory.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';
import { CancellingComponent } from './Pages/cancelling/cancelling.component';
import { DonnerRegisterFormComponent } from './Pages/donner-register-form/donner-register-form.component';
import { DonnerLayoutComponent } from './Pages/donner-layout/donner-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DonorRegistrationFormComponent } from './Pages/donor-registration-form/donor-registration-form.component';
import { DonateBloodComponent } from './Pages/donate-blood/donate-blood.component';
import { ViewProfileComponent } from './Pages/view-profile/view-profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HospitalInterfaceComponent } from './Pages/hospital-interface/hospital-interface.component';
import { HospitalAccountComponent } from './Pages/hospital-account/hospital-account.component';
import { HospitalRegistrationComponent } from './Pages/hospital-registration/hospital-registration.component';
import { HospitalBloodRequestComponent } from './Pages/hospital-blood-request/hospital-blood-request.component';
import { DocterInterfaceComponent } from './Pages/docter-interface/docter-interface.component';
import { DonerClerkComponent } from './Pages/doner-clerk/doner-clerk.component';
import { LaboratoryInterfaceComponent } from './Pages/laboratory-interface/laboratory-interface.component';
import { LaboratoryFormComponent } from './Pages/laboratory-form/laboratory-form.component';
import { InventoryInterfaceComponent } from './Pages/inventory-interface/inventory-interface.component';
import { BloodStockComponent } from './Pages/blood-stock/blood-stock.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AdminInterfaceComponent } from './Pages/admin-interface/admin-interface.component';
import { DonerTableComponent } from './Pages/doner-table/doner-table.component';
import { HospitalTableComponent } from './Pages/hospital-table/hospital-table.component';
import { DoctorTableComponent } from './Pages/doctor-table/doctor-table.component';
import { HospitalRequestTableComponent } from './Pages/hospital-request-table/hospital-request-table.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HospitalComponent,
    PromotionComponent,
    LaboratoryComponent,
    InventoryComponent,
    CancellingComponent,
    DonnerRegisterFormComponent,
    DonnerLayoutComponent,
    DonorRegistrationFormComponent,
    DonateBloodComponent,
    ViewProfileComponent,
    HospitalInterfaceComponent,
    HospitalAccountComponent,
    HospitalRegistrationComponent,
    HospitalBloodRequestComponent,
    DocterInterfaceComponent,
    DonerClerkComponent,
    LaboratoryInterfaceComponent,
    LaboratoryFormComponent,
    InventoryInterfaceComponent,
    BloodStockComponent,
    AdminComponent,
    AdminInterfaceComponent,
    DonerTableComponent,
    HospitalTableComponent,
    DoctorTableComponent,
    HospitalRequestTableComponent,
    FooterComponent,
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

