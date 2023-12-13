import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { HeaderComponent } from './modules/header/header.component';
import { TopHeaderComponent } from './modules/top-header/top-header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/product-list/product/product.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { HomeComponent } from './shared/home/home.component';
import { TeamComponent } from './shared/team/team.component';
import { CompanyComponent } from './shared/company/company.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ArticleComponent } from './shared/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchComponent,
    HeaderComponent,
    TopHeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    FilterComponent,
    HomeComponent,
    TeamComponent,
    CompanyComponent,
    ContactComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule, 
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
