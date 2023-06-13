import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVaccinesComponent } from './register/components/add-vaccines/add-vaccines.component';
import { VaccineTableComponent } from './tables/components/vaccine-table/vaccine-table.component';
import { UpdateVaccinesComponent } from './update/components/update-vaccines/update-vaccines.component';
import { RegisterComponent } from './register/register.component';
import { PersonsTablesComponent } from './tables/components/persons-tables/persons-tables.component';
import { AddPersonsComponent } from './register/components/add-persons/add-persons.component';
import { UpdatePersonsComponent } from './update/components/update-persons/update-persons.component';
import { VaccinesCenterComponent } from './tables/components/vaccines-center/vaccines-center.component';
import { AddVaccinesCenterComponent } from './register/components/add-vaccines-center/add-vaccines-center.component';
import { UpdateVaccinesCenterComponent } from './update/components/update-vaccines-center/update-vaccines-center.component';
import { AddVaccinesDetailsComponent } from './register/components/add-vaccines-details/add-vaccines-details.component';


const routes: Routes = [
  {path:'registrar-vacunas',
  component:RegisterVaccinesComponent,
  },
  {
  path:'registrar-personas',
  component:AddPersonsComponent
  },
  {
  path:'registrar-centros de vacunacion',
  component:AddVaccinesCenterComponent
  },
  {
  path: 'registrar-detalle de vacunacion',
  component:AddVaccinesDetailsComponent
  },
  {path:'vacunas',
   component:VaccineTableComponent},

  {path:'personas',
    component:PersonsTablesComponent},
  {
    path:'centros',
    component:VaccinesCenterComponent
  },
  {path:'actualizar-vacuna/:id',
   component:UpdateVaccinesComponent},
   {
    path:'actualizar-persona/:id',
    component:UpdatePersonsComponent
   },
   {
    path:'actualizar-centros/:id',
    component:UpdateVaccinesCenterComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
