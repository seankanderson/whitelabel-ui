import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const  routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'landing-page', component: LandingPageComponent },
  {path: 'live-orders', component: LiveOrdersComponent },
  {path: 'order-history', component: OrderHistoryComponent },
  {path: 'order-details', component: OrderDetailsComponent },
  {path: 'menu-editor', component: MenuEditorComponent },
  {path: 'admin-panel', component: AdminPanelComponent },
  {path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
