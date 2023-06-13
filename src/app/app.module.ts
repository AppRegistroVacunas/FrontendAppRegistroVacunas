import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterVaccinesComponent } from './register/components/add-vaccines/add-vaccines.component';
import { TablesComponent } from './tables/tables.component';
import { VaccineTableComponent } from './tables/components/vaccine-table/vaccine-table.component';
import { UpdateComponent } from './update/update.component';
import { UpdateVaccinesComponent } from './update/components/update-vaccines/update-vaccines.component';
import { RouterModule } from '@angular/router';
import { AddPersonsComponent } from './register/components/add-persons/add-persons.component';
import { PersonsTablesComponent } from './tables/components/persons-tables/persons-tables.component';
import { UpdatePersonsComponent } from './update/components/update-persons/update-persons.component';
import { VaccinesCenterComponent } from './tables/components/vaccines-center/vaccines-center.component';
import { AddVaccinesCenterComponent } from './register/components/add-vaccines-center/add-vaccines-center.component';
import { UpdateVaccinesCenterComponent } from './update/components/update-vaccines-center/update-vaccines-center.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterVaccinesComponent,
    TablesComponent,
    VaccineTableComponent,
    UpdateComponent,
    UpdateVaccinesComponent,
    AddPersonsComponent,
    PersonsTablesComponent,
    UpdatePersonsComponent,
    VaccinesCenterComponent,
    AddVaccinesCenterComponent,
    UpdateVaccinesCenterComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
