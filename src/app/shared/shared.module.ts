import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BarRatingModule } from "ngx-bar-rating";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HeaderComponent } from './header/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    HeaderComponent,    
    LeftMenuComponent,
    SettingsComponent,
    BreadcrumbComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    LazyLoadImageModule.forRoot({
      // preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    }),
    NgxSkeletonLoaderModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    LazyLoadImageModule,
    NgxSkeletonLoaderModule,
    TranslateModule,
    HeaderComponent,    
    BreadcrumbComponent,
  ]
})
export class SharedModule { }
