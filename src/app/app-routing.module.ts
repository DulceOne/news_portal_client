import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { EAppUrls } from './core/enums/app-urls.enums';

const routes: Routes = [
  {
    path: EAppUrls.AUTH,
    loadChildren: () => AuthModule,
  },
  {
    path: EAppUrls.MAIN,
    loadChildren: () => MainModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
