import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './basketball/components/sidenav/sidenav.component';
import { MainContentComponent } from './basketball/components/main-content/main-content.component';
import { NewTeamComponent } from './basketball/components/new-team/new-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    NewTeamComponent,
  ],
  entryComponents: [NewTeamComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
