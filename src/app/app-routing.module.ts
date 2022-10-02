import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInterfaceComponent } from './Pages/admin-interface/admin-interface.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { BloodStockComponent } from './Pages/blood-stock/blood-stock.component';
import { CancellingComponent } from './Pages/cancelling/cancelling.component';
import { ContainerComponent } from './Pages/container/container.component';
import { DocterInterfaceComponent } from './Pages/docter-interface/docter-interface.component';
import { DonateBloodComponent } from './Pages/donate-blood/donate-blood.component';
import { DonerClerkComponent } from './Pages/doner-clerk/doner-clerk.component';
import { DonerTableComponent } from './Pages/doner-table/doner-table.component';
import { DonnerLayoutComponent } from './Pages/donner-layout/donner-layout.component';
import { DonnerRegisterFormComponent } from './Pages/donner-register-form/donner-register-form.component';
import { DonorRegistrationFormComponent } from './Pages/donor-registration-form/donor-registration-form.component';
import { HomeComponent } from './Pages/home/home.component';
import { HospitalAccountComponent } from './Pages/hospital-account/hospital-account.component';
import { HospitalBloodRequestComponent } from './Pages/hospital-blood-request/hospital-blood-request.component';
import { HospitalInterfaceComponent } from './Pages/hospital-interface/hospital-interface.component';
import { HospitalRegistrationComponent } from './Pages/hospital-registration/hospital-registration.component';
import { HospitalRequestTableComponent } from './Pages/hospital-request-table/hospital-request-table.component';
import { HospitalComponent } from './Pages/hospital/hospital.component';
import { InventoryInterfaceComponent } from './Pages/inventory-interface/inventory-interface.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';
import { LaboratoryFormComponent } from './Pages/laboratory-form/laboratory-form.component';
import { LaboratoryInterfaceComponent } from './Pages/laboratory-interface/laboratory-interface.component';
import { LaboratoryComponent } from './Pages/laboratory/laboratory.component';
import { LoginComponent } from './Pages/login/login.component';
import { PromotionComponent } from './Pages/promotion/promotion.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ViewProfileComponent } from './Pages/view-profile/view-profile.component';

const routes: Routes = [
  {path:'',component:ContainerComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'donner',component:LoginComponent},
    {path:'account',component:DonnerRegisterFormComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'hospital',component:HospitalComponent},
    {path: 'hospital-account',component:HospitalAccountComponent},
    {path: 'inventory', component:InventoryComponent},
    {path:'laboratory',component:LaboratoryComponent},
    {path:  'promotion',component:PromotionComponent},
    {path: 'cancelling',component:CancellingComponent},
    {path: 'admin',component:AdminComponent}
  ]

},
{path: 'main',component:DonnerLayoutComponent,
children:[{ path:'',component:DonorRegistrationFormComponent},
{path:'donate-blood',component:DonateBloodComponent},
{path:'view-profile',component:ViewProfileComponent},
]
},
{path: 'hospital-inter',component:HospitalInterfaceComponent,
children:[{path: '',component:HospitalRegistrationComponent},
{path:'hospital-blood-request',component:HospitalBloodRequestComponent}

]
},
{path: 'docter-inter',component:DocterInterfaceComponent,children:[{
  path: '',component:DonerClerkComponent
}]},

{path: 'laboratory-interface',component:LaboratoryInterfaceComponent,
children:[{path: '',component:LaboratoryFormComponent}]
},
{path:'inventory-inter',component:InventoryInterfaceComponent,
children:[{path:'',component:BloodStockComponent}]
},
{path: 'admin-inter',component:AdminInterfaceComponent,
children:[{path:'',component:DonerTableComponent},
{path: 'hospital-table',component:HospitalRequestTableComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
