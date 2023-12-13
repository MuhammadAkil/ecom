import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './shared/home/home.component';
import { CompanyComponent } from './shared/company/company.component';
import { ContactComponent } from './shared/contact/contact.component';
import { TeamComponent } from './shared/team/team.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company',component:CompanyComponent  },
  { path: 'contact',component:ContactComponent  },
  {path:'team', component:TeamComponent},
  // Add other routes as needed
  // { path: '**', component:  }, // This is a wildcard route for any other path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
