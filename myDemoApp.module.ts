import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { MyDemoAppComponent }  from './myDemoApp.component';
import { FormsModule } from '@angular/forms'
import { WelcomeComponent } from './home/welcome.component'
import { MealModule } from './meals/meal.module'

@NgModule({
  imports: [ BrowserModule,RouterModule.forRoot([
    
    {path: 'welcome', component: WelcomeComponent},
    {path: '',redirectTo:'welcome',pathMatch: 'full'},
    {path: '**',redirectTo:'welcome',pathMatch: 'full'}
  ]),
  MealModule
  ],
  declarations: [ MyDemoAppComponent, WelcomeComponent],
  bootstrap: [ MyDemoAppComponent ],
  
})
export class MyDemoAppModule { }

