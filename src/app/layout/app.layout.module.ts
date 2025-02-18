import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from './config/app.config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './breadcrumb/app.breadcrumb.component';
import { AppSidebarComponent } from './sidebar/app.sidebar.component';
import { AppTopbarComponent } from './topbar/app.topbar.component';
import { AppProfileSidebarComponent } from './profile-sidebar/app.profilesidebar.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppMenuitemComponent } from './menu/app.menuitem.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import {GeojsonUploadModule} from "../modules/geojson-upload/geojson-upload.module";

@NgModule({
    declarations: [AppLayoutComponent, AppBreadcrumbComponent, AppSidebarComponent, AppTopbarComponent, AppProfileSidebarComponent, AppMenuComponent, AppMenuitemComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StyleClassModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        ButtonModule,
        GeojsonUploadModule
    ]
})
export class AppLayoutModule {}
