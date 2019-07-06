import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { AguasAndinasComponent } from './views/aguas-andinas/aguas-andinas.component';
import { EnelComponent } from './views/enel/enel.component';
import { SidebarMenuComponent } from './views/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AguasAndinasComponent,
    EnelComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule,
    NbSidebarModule.forRoot(),
    NbMenuModule,
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
