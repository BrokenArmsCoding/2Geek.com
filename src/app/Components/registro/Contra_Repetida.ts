import { FormGroup } from '@angular/forms';

// Validador personalizado para comprobar que Contra (Contraseña) y RepContra (Repetir Contraseña) coinciden
export function Comprobacion(cont: string, rep_cont: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[cont];
        const matchingControl = formGroup.controls[rep_cont];

        if (matchingControl.errors) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ Comprobacion: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
