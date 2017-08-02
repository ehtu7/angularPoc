import {Pipe,PipeTransform} from '@angular/core'
import { MealProps } from './meal'

@Pipe({
    name:'mealFilter'
})
export class MealFilterPipe implements PipeTransform{
    transform(value: MealProps[],filterBy: string):MealProps[]{
   
        filterBy=filterBy?filterBy.toLocaleLowerCase(): null;
        return filterBy ? value.filter((meal:MealProps)=>
        (meal.mealName.toLowerCase().indexOf(filterBy)!=-1)):value
    }
}