import { Injectable } from '@angular/core'
import { MealProps } from './meal'
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class MealSearchService{
    private url: string = "api/products/MealsDetail.json"
    

    public constructor(private _http: Http){}

    getMealList(): Observable<MealProps[]>{
        console.log('Raw data : '+this._http.get(this.url))
        return this._http.get(this.url).map((response: Response) => <MealProps[]> response.json() )
     .do(data => console.log('ALL: '+ JSON.stringify(data)))
     .catch(this.handleError)
     
    }
    private handleError(error: Response) {
        console.error(error)
        return Observable.throw(error.json().error || 'Server Error')
    }



}
