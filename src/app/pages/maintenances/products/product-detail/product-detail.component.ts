import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  title: string = ''
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ProductDetailComponent>,
    public fb: FormBuilder) {
    console.log('DATA ENTRANTE : ', JSON.stringify(data));
    if (data.id === 0) {
      this.title = 'NUEVO PRODUCTO'
    } else {
      this.title = 'ACTUALIZAR PRODUCTO'
    }


    this.form = this.fb.group({
      idProducto: [''],
      nombreProducto: ['', [Validators.required]],
      descProducto: [''],
      precioProducto: ['', [Validators.required]],
      idCategoriaProducto: ['', [Validators.required]],
      indicadorAplicacion: [''],
      flgEstado: [''],
      fechaCreacion: [''],
      usuarioCreacion: [''],
      fechaActualizacion: [''],
      usuarioActualizacion: [''],
    })

  }

  errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  cancel() {
    this.dialogRef.close({ data: 'you cancelled' })
  }

  submitForm() {

    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close({ data: this.form.value })
  }

  ngOnInit(): void {

  }

}
