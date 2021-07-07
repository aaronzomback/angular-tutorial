import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

// The @NgModule metadata initializes the router 
// and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* First, the app-routing.module.ts file imports RouterModule and Routes so the application can have routing functionality. 
The next import, HeroesComponent, will give the Router somewhere to go once you configure the routes.*/