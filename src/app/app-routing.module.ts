import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { DripmarketingComponent } from './dripmarketing/dripmarketing.component';
import { FailedleadComponent } from './failedlead/failedlead.component';
import { LiadlistComponent } from './liadlist/liadlist.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MyfolluupComponent } from './myfolluup/myfolluup.component';
import { NavallComponent } from './navall/navall.component';
import { NavclosedComponent } from './navclosed/navclosed.component';
import { NavenrolledComponent } from './navenrolled/navenrolled.component';
import { NavfollowupComponent } from './navfollowup/navfollowup.component';
import { NavfreshComponent } from './navfresh/navfresh.component';
import { NavinfutureComponent } from './navinfuture/navinfuture.component';
import { NavonlineComponent } from './navonline/navonline.component';
import { NavreenquredComponent } from './navreenqured/navreenqured.component';
import { NavreferdformeComponent } from './navreferdforme/navreferdforme.component';
import { NavwalkinComponent } from './navwalkin/navwalkin.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path: 'navall', component: NavallComponent},
  {path: 'navclosed', component: NavclosedComponent},
  {path: 'navenrolled', component: NavenrolledComponent},
  {path: 'navfollowup', component: NavfollowupComponent},
  {path: 'navfresh', component: NavfreshComponent},
  {path: 'navinfuture', component: NavinfutureComponent},
  {path: 'navonline', component: NavonlineComponent},
  {path: 'navwalkin', component: NavwalkinComponent},
  {path: 'navreferdforme', component: NavreferdformeComponent},
  {path: 'navreenqured', component: NavreenquredComponent},
  {path: 'liadlist', component: LiadlistComponent},
  {path: 'myfolluup', component: MyfolluupComponent},
  {path: 'chatlist', component:ChatlistComponent}, 
  {path: 'failedlead', component:FailedleadComponent},
  {path: 'marketing', component:MarketingComponent},
  {path: 'dripmarketing', component:DripmarketingComponent},
  {path: 'report', component:ReportComponent},
  {path: 'setting', component:SettingComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
