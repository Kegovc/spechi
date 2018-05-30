import { SafePipe } from './../shared/pipes/safe.pipe';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public productos: any = [
    {
      titulo: `CONTPAQi® Comercial`,
      descripcion: `Administración de procesos de Compras, Ventas, Inventarios, Cobranza y Cuentas por pagar.`,
      comentario: `Elige la edición que mejor se adapte al volumen de información y al crecimiento de tu empresa: Start, Pro, Premium.`,
      img: `contpaqi_comercial.png`,
      video: `https://www.youtube.com/embed/_PM-edSo328`
    },
    {
      titulo: `CONTPAQi® Nóminas`,
      // tslint:disable-next-line:max-line-length
      descripcion: `Es el sistema para administración de la nómina que se adapta de manera fácil a tus procesos de cálculo, te ayuda a cumplir con todas las obligaciones de ley y hacer un pago a tiempo a tus empleados.`,
      comentario: `Facilita su trabajo a encargados de nómina, contadores y encargados de recursos humanos de todo perfil de empresas.`,
      img: `contpaqi_nominas.png`,
      video: `https://www.youtube.com/embed/82Avo4E7QGQ`
    },
    {
      titulo: `CONTPAQi® Bancos`,
      // tslint:disable-next-line:max-line-length
      descripcion: `Sistema con el que tu dinero siempre está a la vista, porque te ayuda a controlar tus ingresos y egresos, administrar tus cuentas bancarias y flujo de efectivo integrando la información de tus comprobantes fiscales digitales.`,
      comentario: `Diseñado para tesoreros, contadores, encargados de pagos, administradores y directores de todo perfil de empresas`,
      img: `contpaqi_bancos.png`,
      video: `https://www.youtube.com/embed/_RhSx-Lx7Fc`
    },
    {
      titulo: `CONTPAQi® Contabilidad`,
      // tslint:disable-next-line:max-line-length
      descripcion: `Es el sistema contable integrador favorito de los Contadores que facilita el proceso de la informacion contable, financiera y fiscal de tu empresa, así como la recepción de tus comprombantes fiscales digitales.`,
      comentario: `Diseñado para contadores, fiscalistas, auditores, administradores y directores de todo perfil de empresas.`,
      img: `contpaqi_contabilidad.png`,
      video: `https://www.youtube.com/embed/wgBEeE9sKSQ`
    }
  ];
  constructor() { }
  ngOnInit() {
  }

}
