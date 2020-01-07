import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserChartsComponent } from './components/user-charts/user-charts.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarModule } from 'ngx-avatar';



@NgModule({
  declarations: [LogoutComponent, ProfilePageComponent, UserInfoComponent, UserChartsComponent, FooterComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AvatarModule
  ],exports:[
    FooterComponent

  ]
})
export class ProfileModule { }
