import { Component,Input, Output,OnChanges,EventEmitter} from '@angular/core'

@Component({
    selector:"ai-star",
    moduleId: module.id,
    templateUrl:'star.Component.html',
    styleUrls:['star.Component.css']
})

export class StarComponent implements OnChanges{
       starWidth: number
    @Input() rating: number 
    @Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>()
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5
    }
 

    onClick():void{
            this.ratingClicked.emit(`this rating ${this.rating} was clicked`)
    }


}