import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MenuBrowserComponent } from './menu-browser/menu-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveOrdersComponent,
    MenuEditorComponent,
    LandingPageComponent,
    OrderDetailsComponent,
    OrderHistoryComponent,
    AdminPanelComponent,
    UserProfileComponent,
    AuthenticationComponent,
    MenuBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
