import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PersonalFmComponent } from './pages/personal-fm/personal-fm.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { SongSheetComponent } from './pages/song-sheet/song-sheet.component';
import { MyMusicComponent } from './pages/my-music/my-music.component';
import { SystemSettingComponent } from './pages/system-setting/system-setting.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'discover/suggest',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'discover',
        loadChildren: './pages/discover/discover.module#DiscoverModule'
      },
      {
        path: 'personal-fm',
        component: PersonalFmComponent
      },
      {
        path: 'mv',
        loadChildren: './pages/mv/mv.module#MvModule'
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'song-sheet/:id',
        component: SongSheetComponent
      },
      {
        path: 'my-music',
        component: MyMusicComponent
      },
      {
        path: 'system-setting',
        component: SystemSettingComponent
      },
      {
        path: 'user-setting',
        component: UserSettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
