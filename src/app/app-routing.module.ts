import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './basketball/components/main-content/main-content.component';
import { SidenavComponent } from './basketball/components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'side-nav',
    component: SidenavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
