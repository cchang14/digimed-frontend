import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { SidenavListComponent } from './core/header/sidenav-list/sidenav-list.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AboutComponent } from './features/about/about.component';
import { BarComponent } from './features/charts/bar/bar.component';
import { TestComponent } from './features/test/test.component';
import { AboutProjectComponent } from './features/about/about-project/about-project.component';
import { SupportComponent } from './features/support/support.component';
import { FaqComponent } from './features/support/faq/faq.component';
import { ContactComponent } from './features/support/contact/contact.component';
import { AboutPublicationsComponent } from './features/about/about-publications/about-publications.component';
import { AboutToolsComponent } from './features/about/about-tools/about-tools.component';
import { LoginComponent } from './features/login/login.component';
import { MyResearchComponent } from './features/dashboard/my-research/my-research.component';

import { FilterPipe } from './_services/filter.pipe';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SignupComponent } from './features/signup/signup.component';
import { DatasetViewComponent } from './features/dashboard/dataset/dataset-view/dataset-view.component';
import { AllDatasetsComponent } from './features/dashboard/dataset/all-datasets/all-datasets.component';
import { DatasetEditComponent } from './features/dashboard/dataset/dataset-edit/dataset-edit.component';
import { SearchComponent } from './features/search/search.component';

@NgModule({
  declarations: [
    // pipe
    FilterPipe,

    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    SidebarComponent,
    AboutComponent,
    BarComponent,
    TestComponent,
    AboutProjectComponent,
    SupportComponent,
    FaqComponent,
    ContactComponent,
    AboutPublicationsComponent,
    AboutToolsComponent,
    LoginComponent,
    MyResearchComponent,
    SignupComponent,
    DatasetViewComponent,
    AllDatasetsComponent,
    DatasetEditComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FilterPipe
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
