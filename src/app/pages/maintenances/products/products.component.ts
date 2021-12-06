import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/products.service';
import { IResponse } from 'src/app/interfaces/response.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idProducto', 'nombreProducto', 'precioProducto', 'indicadorAplicacion', 'usuarioCreacion', 'fechaCreacion', 'flgEstado'];
  dataSource: MatTableDataSource<IProduct>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private productService: ProductService) {
    this.listarProductos()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openFormDetail(row?: IProduct) {

    const dialogRef = this.dialog.open(ProductDetailComponent, { data: { ...row } });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${JSON.stringify(result)}`);
      this.listarProductos()
    });
  }

  listarProductos() {
    this.productService.list()
      .subscribe(({ data }: IResponse) => {
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('listado de productos :', data);
      })
  }
}
