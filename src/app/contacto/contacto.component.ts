import { ContactoService } from './../shared/services/contacto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public data: any = {
    nombre: '',
    asunto: '',
    mensaje: '',
    correo: '',
    tel: ''
  };
  public contactoForm: FormGroup;
  public errorMessages: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private contactoService: ContactoService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactoForm = this.formBuilder.group( {
      nombre: ['', Validators.required],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('\\+?[0-9]{8,}')]]
    });
  }

  doContact() {
    // tslint:disable-next-line:no-var-keyword
    console.log('Form: ', this.contactoForm);
    this.showMessages();
    if (!this.contactoForm.valid) {
      console.log('Error: ', this.errorMessages);
      return;
    }
    // tslint:disable-next-line:one-line
    else {
      // tslint:disable-next-line:prefer-const
      const str_href = `mailto:contacto@spechi.mx?subject=${encodeURI(this.data.asunto)}&body=${encodeURI(`${this.data.mensaje}
      contacto:
      nombre:   ${this.data.nombre}
      correo:   ${this.data.correo}
      telefono: ${this.data.tel}`)}`;
      const _data = {
        correo: `${this.data.correo}`,
        asunto: `${this.data.asunto}`,
        mensaje: `${this.data.mensaje}
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
    const control = this.contactoForm.controls[controlName];

    try {
      return control.errors[error] && (control.dirty || force);
    } catch (e) {
      return false;
    }
  }


  showMessages() {
    for (const k in this.contactoForm.controls) {
      if (this.contactoForm.controls.hasOwnProperty(k)) {
        this.errorMessages[k] = this.hasError(k, 'required', true);
      }
    }
  }

}
