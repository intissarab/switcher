import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'propose', loadChildren: './propose/propose.module#ProposePageModule' },
  { path: 'request', loadChildren: './request/request.module#RequestPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'invite', loadChildren: './invite/invite.module#InvitePageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'mycrouses', loadChildren: './mycrouses/mycrouses.module#MycrousesPageModule' },
  { path: 'myrequests', loadChildren: './myrequests/myrequests.module#MyrequestsPageModule' },
  
  
];

// une fois jsui sure Localhost/tabs  tabs se telecharge du coup !!

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 