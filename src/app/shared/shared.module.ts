import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [CommonModule,FormsModule],
  exports: [CommonModule, SharedModule],
})
export class SharedModule {}
