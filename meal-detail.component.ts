import { Component,OnInit } from '@angular/core'
import { MealProps} from './meal'
import { ActivatedRoute,Router } from '@angular/router'
@Component({

templateUrl:'MyDemoApp/meals/meal-detail.component.html'
})
export class MealDetailComponent implements OnInit{
    title:string = 'Welcome to Product Detail'
    meal: MealProps ;

    constructor(private _route: ActivatedRoute, private _router: Router){

    }
    ngOnInit(): void{
        let id=+this._route.snapshot.params['id'];
        this.title+=`:${id}`;
    }
    onBack():void{
        this._router.navigate(['/meals'])
    }
}
