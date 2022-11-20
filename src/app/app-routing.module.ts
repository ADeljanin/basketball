import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './basketball/components/main-content/main-content.component';
import { TeamsComponent } from './basketball/components/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
