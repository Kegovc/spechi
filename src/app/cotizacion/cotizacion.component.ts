import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {


  public data: any = {};
  public contizacionForm: FormGroup;
  public errorMessages: any = {};


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contizacionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      giro: ['', Validators.required],
      descripcion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('\\+?[0-9]{8,}')]]
    });
  }

  doContact() {
    // tslint:disable-next-line:no-var-keyword
    var b: any;
    console.log('Form: ', this.contizacionForm);
    this.showMessages();
    if (!this.contizacionForm.valid) {
      console.log('Error: ', this.errorMessages);
      return;
    }
    // tslint:disable-next-line:one-line
    else {
      // tslint:disable-next-line:prefer-const
      // tslint:disable-next-line:max-line-length
      const str_href = `mailto:cotizacion@spechi.com?subject=Cotización para ${encodeURI(this.data.giro)}&body=${encodeURI(`${this.data.descripcion}
      contacto:
      nombre:   ${this.data.nombre}
      correo:   ${this.data.correo}
      telefono: ${this.data.tel}`)}`;
      b = document.createElement('a');
      b.setAttribute('href', str_href);
      b.innerHTML  = 'test value';
      b.click();
    }
  }

  hasError(controlName, error, force = false) {
    const control = this.contizacionForm.controls[controlName];

    try {
      return control.errors[error] && (control.dirty || force);
    } catch (e) {
      return false;
    }
  }


  showMessages() {
    for (const k in this.contizacionForm.controls) {
      if (this.contizacionForm.controls.hasOwnProperty(k)) {
        this.errorMessages[k] = this.hasError(k, 'required', true);
      }
    }
  }


}
