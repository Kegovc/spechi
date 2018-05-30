import { ContactoService } from './../shared/services/contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';


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
    private formBuilder: FormBuilder,
    private contactoService: ContactoService
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
      const str_href = `mailto:contacto@spechi.mx?subject=Cotización para ${encodeURI(this.data.giro)}&body=${encodeURI(`${this.data.descripcion}
      contacto:
      nombre:   ${this.data.nombre}
      correo:   ${this.data.correo}
      telefono: ${this.data.tel}`)}`;
      const _data = {
        correo: `${this.data.correo}`,
        asunto: `Cotización para ${this.data.giro}`,
        mensaje: `${this.data.descripcion}
        contacto:
        nombre:   ${this.data.nombre}
        correo:   ${this.data.correo}
        telefono: ${this.data.tel}`

      };
      this.contactoService.sendMail('contacto', _data)
      .then(response => {
        if (environment.debug) { console.log(response); }
        if (!response.fun.access) {
          let b: any;
          b = document.createElement('a');
          b.setAttribute('href', str_href);
          b.innerHTML  = 'test value';
          b.click();
        }
      });
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
