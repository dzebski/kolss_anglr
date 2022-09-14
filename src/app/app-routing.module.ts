import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FasadesComponent } from './fasades/fasades.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { SaleComponent } from './sale/sale.component';
import { SalonsComponent } from './salons/salons.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { WardrobesComponent } from './wardrobes/wardrobes.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'kitchens', component: KitchensComponent },
      { path: 'wardrobes', component: WardrobesComponent },
      { path: 'fasades', component: FasadesComponent },
      { path: 'salons', component: SalonsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sale', component: SaleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
