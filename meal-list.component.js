"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mealSearch_services_1 = require("./mealSearch-services");
var MealListComponent = (function () {
    function MealListComponent(mealSearchService) {
        this.mealSearchService = mealSearchService;
        this.pageTitle = "Dishes List !!!";
        this.listFilter = "";
        this.imageMargin = 2;
        this.imageWidth = 50;
        this.showImage = false;
        this.errorMessage = "Alert, ";
    }
    MealListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    MealListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mealSearchService.getMealList()
            .subscribe(function (meals) { return _this.meals = meals; }, function (error) { return _this.errorMessage = error; });
        console.log("inside On Init() of MealListComponent");
    };
    MealListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle += message;
    };
    return MealListComponent;
}());
MealListComponent = __decorate([
    core_1.Component({
        selector: "pm-meals",
        templateUrl: 'MyDemoApp/meals/meal-list.component.html',
        styleUrls: ['MyDemoApp/meals/meal-list.componenet.css']
    }),
    __metadata("design:paramtypes", [mealSearch_services_1.MealSearchService])
], MealListComponent);
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map