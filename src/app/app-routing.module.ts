import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'savewastedata', loadChildren: './pages/savewastedata/savewastedata.module#SavewastedataPageModule' },
  { path: 'collect', loadChildren: './pages/collect/collect.module#CollectPageModule' },
  { path: 'scanqrcode', loadChildren: './pages/scanqrcode/scanqrcode.module#ScanqrcodePageModule' },
  { path: 'assessment', loadChildren: './pages/assessment/assessment.module#AssessmentPageModule' },
  { path: 'statistic', loadChildren: './pages/statistic/statistic.module#StatisticPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
