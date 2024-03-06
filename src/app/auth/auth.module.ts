import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, VerifyAccountComponent],
  imports: [CommonModule,FormsModule],
  exports: [LoginComponent, RegisterComponent,FormsModule],
})
export class AuthModule {}
