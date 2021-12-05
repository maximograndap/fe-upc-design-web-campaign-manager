import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  title: string;
  form: FormGroup;
  productRequest: IProduct;
  isNewRecord: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IProduct, private dialogRef: MatDialogRef<ProductDetailComponent>,
    public fb: FormBuilder) {
    console.log('DATA ENTRANTE : ', JSON.stringify(data));
    this.isNewRecord = data.idProducto ? false : true;
    if (this.isNewRecord) {
      this.title = 'NUEVO PRODUCTO';
      this.productRequest = {
        idProducto: '',
        nombreProducto: '',
        descProducto: '',
        precioProducto: '',
        idCategoriaProducto: '',
        indicadorAplicacion: '',
        flgEstado: '',
        fechaCreacion: '',
        usuarioCreacion: '',
        fechaActualizacion: '',
        usuarioActualizacion: '',
      };
    } else {
      this.title = 'ACTUALIZAR PRODUCTO';
      this.productRequest = { ...data };
    }
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
    const pr = this.productRequest;
    this.form = this.fb.group({
      idProducto: [pr.idProducto],
      nombreProducto: [pr.nombreProducto, [Validators.required]],
      descProducto: [pr.descProducto],
      precioProducto: [pr.precioProducto, [Validators.required]],
      idCategoriaProducto: [pr.idCategoriaProducto, [Validators.required]],
      indicadorAplicacion: [pr.indicadorAplicacion],
      flgEstado: [pr.flgEstado, [Validators.required]],
      fechaCreacion: [pr.fechaCreacion],
      usuarioCreacion: [pr.usuarioCreacion],
      fechaActualizacion: [pr.fechaActualizacion],
      usuarioActualizacion: [pr.usuarioActualizacion],
    })
  }

}
