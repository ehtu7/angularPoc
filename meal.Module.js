"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meal_guard_service_1 = require("./meal-guard.service");
var meal_filter_pipe_1 = require("./meal-filter.pipe");
var mealSearch_services_1 = require("./mealSearch-services");
var meal_detail_component_1 = require("./meal-detail.component");
var meal_list_component_1 = require("./meal-list.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var shared_module_1 = require("../shared/shared.module");
var MealModule = (function () {
    function MealModule() {
    }
    return MealModule;
}());
MealModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            router_1.RouterModule.forChild([
                { path: 'meals', component: meal_list_component_1.MealListComponent },
                { path: 'meal/:id',
                    canActivate: [meal_guard_service_1.MealDetailGuard],
                    component: meal_detail_component_1.MealDetailComponent },
            ]), shared_module_1.SharedModule
        ],
        declarations: [meal_list_component_1.MealListComponent,
            meal_filter_pipe_1.MealFilterPipe,
            meal_detail_component_1.MealDetailComponent,
        ],
        providers: [mealSearch_services_1.MealSearchService, meal_guard_service_1.MealDetailGuard],
    })
], MealModule);
exports.MealModule = MealModule;
//# sourceMappingURL=meal.module.js.map