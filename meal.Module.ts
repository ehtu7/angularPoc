import { NgModule } from '@angular/core';

import { MealDetailGuard } from './meal-guard.service'
import { MealFilterPipe } from'./meal-filter.pipe'
import { MealSearchService } from './mealSearch-services'
import { MealDetailComponent } from './meal-detail.component'
import { MealListComponent } from'./meal-list.component'
import { RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [ 
               HttpModule,
               
               RouterModule.forChild([
               
                    {path: 'meals', component: MealListComponent},
                    {path: 'meal/:id', 
                    canActivate: [MealDetailGuard],
                    component: MealDetailComponent},
                    
            ]),SharedModule],
     declarations: [ MealListComponent,
                     MealFilterPipe,
                     MealDetailComponent,
                     
                     ] ,
providers: [MealSearchService,MealDetailGuard],


})
export class MealModule {
    
}
