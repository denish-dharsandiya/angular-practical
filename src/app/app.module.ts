import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FirstStaticColComponent } from './first-static-col/first-static-col.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { GridGraphComponent } from './grid-graph/grid-graph.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { RightSideComponent } from './right-side/right-side.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavComponent,
    TopNavComponent,
    FirstStaticColComponent,
    BalanceCardComponent,
    GridGraphComponent,
    TransHistoryComponent,
    RightSideComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
