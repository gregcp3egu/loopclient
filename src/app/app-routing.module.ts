import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'scanner', loadChildren: './tabs/scanner/scanner.module#ScannerPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
