import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProjectComponent } from './features/about/about-project/about-project.component';
import { AboutPublicationsComponent } from './features/about/about-publications/about-publications.component';
import { AboutToolsComponent } from './features/about/about-tools/about-tools.component';
import { AboutComponent } from './features/about/about.component';
import { AllDatasetsComponent } from './features/dashboard/dataset/all-datasets/all-datasets.component';
import { DatasetEditComponent } from './features/dashboard/dataset/dataset-edit/dataset-edit.component';
import { DatasetViewComponent } from './features/dashboard/dataset/dataset-view/dataset-view.component';
import { MyResearchComponent } from './features/dashboard/my-research/my-research.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { SearchComponent } from './features/search/search.component';
import { SignupComponent } from './features/signup/signup.component';
import { ContactComponent } from './features/support/contact/contact.component';
import { FaqComponent } from './features/support/faq/faq.component';
import { SupportComponent } from './features/support/support.component';
import { TestComponent } from './features/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},

  { path: 'about', component: AboutComponent, children: [
    { path: 'project', component: AboutProjectComponent},
    { path: 'publications', component: AboutPublicationsComponent},
    { path: 'tools', component: AboutToolsComponent}
  ]},
  { path: 'support', component: SupportComponent, children: [
    { path: 'faq', component: FaqComponent},
    { path: 'contact', component: ContactComponent},
  ]},

  { path: 'my-research', component: MyResearchComponent},
  // dataset
  { path: 'dataset', component: AllDatasetsComponent},
  { path: 'dataset/view', component: DatasetViewComponent},
  { path: 'dataset/edit', component: DatasetEditComponent},

  // search
  { path: 'search', component: SearchComponent},



  { path: 'test', component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
