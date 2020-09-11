import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app-components';
import { EventsListComponent } from './events/event-list-components';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/navbar-components'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
