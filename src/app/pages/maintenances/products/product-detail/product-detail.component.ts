import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

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
    public fb: FormBuilder, private productService: ProductService) {
    console.log('DATA ENTRANTE : ', JSON.stringify(data));
    this.isNewRecord = data.idProducto ? false : true;
    if (this.isNewRecord) {
      this.title = 'NUEVO PRODUCTO';
      this.productRequest = {
        nombreProducto: '',
        descProducto: '',
        precioProducto: '',
        idCategoriaProducto: ''
      };
    } else {
      this.title = 'ACTUALIZAR PRODUCTO';
      this.productRequest = { ...data, idCategoriaProducto: String(data.idCategoriaProducto) };
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

    if (this.isNewRecord) {
      console.log('NUEVO RECORD');
      this.productService.add(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    } else {
      console.log('ACTUALIZAR RECORD');
      this.productService.update(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    }

    this.dialogRef.close({ data: this.form.value })
  }

  ngOnInit(): void {
    const pr = this.productRequest;
    this.form = this.fb.group({
      idProducto: [pr.idProducto],
      nombreProducto: [pr.nombreProducto, [Validators.required, Validators.minLength(5)]],
      descProducto: [pr.descProducto, [Validators.maxLength(60)]],
      precioProducto: [pr.precioProducto, [Validators.required]],
      idCategoriaProducto: [pr.idCategoriaProducto, [Validators.required]],
      indicadorAplicacion: [pr.indicadorAplicacion],
      flgEstado: [pr.flgEstado === 'A' ? 'ACTIVO' : 'INACTIVO'],
      fechaCreacion: [pr.fechaCreacion],
      usuarioCreacion: [pr.usuarioCreacion],
      fechaActualizacion: [pr.fechaActualizacion],
      usuarioActualizacion: [pr.usuarioActualizacion],
    })
  }

}
