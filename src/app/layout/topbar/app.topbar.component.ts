import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppSidebarComponent } from '../sidebar/app.sidebar.component';
import {Observable} from "rxjs";
import {PointService} from "../../modules/grid-map/services/point.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
    activeItem!: number;
    latitude!:number;
    longitude!:number;
    public pointInfo$: Observable<any> = this.pointService.pointInfo$;
    constructor(public layoutService: LayoutService, public el: ElementRef, public pointService: PointService) {}

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onSidebarButtonClick() {
        this.layoutService.showSidebar();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
    onSearchPoint(){
        this.pointService.setPoint({lat: this.latitude, lon: this.longitude})
    }

    }
