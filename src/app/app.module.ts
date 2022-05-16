import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavallComponent } from './navall/navall.component';
import { NavfreshComponent } from './navfresh/navfresh.component';
import { NavfollowupComponent } from './navfollowup/navfollowup.component';
import { NavwalkinComponent } from './navwalkin/navwalkin.component';
import { NavinfutureComponent } from './navinfuture/navinfuture.component';
import { NavenrolledComponent } from './navenrolled/navenrolled.component';
import { NavclosedComponent } from './navclosed/navclosed.component';
import { NavreferdformeComponent } from './navreferdforme/navreferdforme.component';
import { NavreenquredComponent } from './navreenqured/navreenqured.component';
import { NavonlineComponent } from './navonline/navonline.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LiadlistComponent } from './liadlist/liadlist.component';
import { MyfolluupComponent } from './myfolluup/myfolluup.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { FailedleadComponent } from './failedlead/failedlead.component';
import { MarketingComponent } from './marketing/marketing.component';
import { DripmarketingComponent } from './dripmarketing/dripmarketing.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavallComponent,
    NavfreshComponent,
    NavfollowupComponent,
    NavwalkinComponent,
    NavinfutureComponent,
    NavenrolledComponent,
    NavclosedComponent,
    NavreferdformeComponent,
    NavreenquredComponent,
    NavonlineComponent,
    FooterComponent,
    LiadlistComponent,
    MyfolluupComponent,
    ChatlistComponent,
    FailedleadComponent,
    MarketingComponent,
    DripmarketingComponent,
    ReportComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MatSidenavModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
