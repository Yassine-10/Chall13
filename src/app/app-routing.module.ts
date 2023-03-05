import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatCitizenComponent} from "./creat-citizen/creat-citizen.component";
import {DisplayCitizenComponent} from "./display-citizen/display-citizen.component";


const routes: Routes = [ {
  path: 'citizen',
  component: CreatCitizenComponent
},
  {
    path: 'displayCitizen',
    component: DisplayCitizenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
