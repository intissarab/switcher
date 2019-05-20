import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
     {
         path: '', //default
         component: TabsPage, //for loading the 3 pages in my children path
         children: [
        
         { path: 'feed', loadChildren: '../feed/feed.module#FeedPageModule' },
         { path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderPageModule' },
         { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
        ]
     }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }