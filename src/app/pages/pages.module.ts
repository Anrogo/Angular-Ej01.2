import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorTailorModule.forRoot({
            errors: {
                //For each type of error that can be filtered by Validatiors, a corresponding message will be displayed.
              useValue: {
                required: 'Este campo es requerido',
                email: 'El formato de correo no es válido',
                minlength: ({ requiredLength, actualLength }) => 
                            `Longitud mínima: ${requiredLength}. Le faltan: ${requiredLength - actualLength}`,
                pattern: 'Este campo no cumple las reglas'
              }
            }
          })
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }
