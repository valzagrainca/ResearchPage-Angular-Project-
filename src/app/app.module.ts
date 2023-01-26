import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavbarlistComponent } from './components/header/navbar-list/navbarlist.component';
import { UserinfoComponent } from './components/header/user-info/userinfo.component';
import { SearchComponent } from './shared/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ResearchfiltersComponent } from './components/portfolio-header/research-filters/researchfilters.component';
import { DarkmodeToggleComponent } from './shared/darkmode-toggle/darkmode-toggle.component';
import { MaintopComponent } from './components/main-top/maintop.component';
import { TableMarketComponent } from './components/table-market/table-market.component';
import { SubmarketRankingComponent } from './components/submarket-ranking/submarket-ranking.component';
import { MainbottomComponent } from './components/main-bottom/mainbottom.component';
import { PortfolioHeaderComponent } from './components/portfolio-header/portfolio-header.component';
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { CurrencyCheckPipe } from './pipes/currency-check.pipe';
import { CurrencySelectBoxComponent } from './shared/currency-select-box/currency-select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavbarlistComponent,
    UserinfoComponent,
    SidebarComponent,
    SearchComponent,
    ResearchfiltersComponent,
    DarkmodeToggleComponent,
    MaintopComponent,
    TableMarketComponent,
    SubmarketRankingComponent,
    MainbottomComponent,
    PortfolioHeaderComponent,
    BlackBackgroundDirective,
    CurrencyCheckPipe,
    CurrencySelectBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
