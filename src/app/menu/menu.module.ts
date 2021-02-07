import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }

export class Ingredient { }

export class MenuItem {

  
  
  name: string;
  description: string;

  price: number;


  servingTimeStart: Date;
  servingTimeEnd: Date;


  menuItems: MenuItem[];
  ingredients: Ingredient[];

  notes: string[];
  warnings: string[];

  foodAllergy: string[];

}

//menu item can contain ingredients that are allowed to be modified (not nessesarily ALL of the ingredients ).
//menu item can contain other menu items

//standard descriptions are comprised but can be overwritten

//flags indictate if the ingredient is included in the meal already and if they can be substituted.

//substitution associatations for ingredients can be built to automate logic for displaying or gathering all changes that a customer requires.

//images for the ingredients (optional)

//show as out of stock flag....to help in the UI with styling and design for temporary food shortages



