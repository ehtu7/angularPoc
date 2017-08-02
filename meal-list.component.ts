import { Component,OnInit } from '@angular/core'
import { MealProps } from './meal'
 import { MealSearchService } from './mealSearch-services'

@Component({
    selector:"pm-meals",
    templateUrl:'MyDemoApp/meals/meal-list.component.html',
    styleUrls:['MyDemoApp/meals/meal-list.componenet.css']
})

export class MealListComponent implements OnInit{
    pageTitle:string="Dishes List !!!"
    listFilter:string=""
    imageMargin:number=2
    imageWidth:number=50
    showImage:boolean = false
    meals : MealProps[];

       errorMessage:string = "Alert, "

    

    constructor(private mealSearchService:  MealSearchService){
    }

    toggleImage():void {
        this.showImage = !this.showImage
    }
    ngOnInit(): void{
        this.mealSearchService.getMealList()
                           .subscribe(meals => this.meals = meals, error => this.errorMessage = <any>error) ;
        console.log("inside On Init() of MealListComponent")
    }
    onRatingClicked(message:string):void{
        this.pageTitle += message
    }


}