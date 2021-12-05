import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { IProduct } from 'src/app/interfaces/product.interface';

const NAMES: string[] = [
  'Clindamicina 600mg', 'Levofloxacino 600mg', 'Neurobion 500mg', 'Neurobion 800mg', 'Levofloxacino 300mg', 'Clindamicina 600mg', 'Amoxixilina 500', 'Naproxeno 500'
];

const PRICES: string[] = ['S/ 40.00', 'S/35.00', 'S/120.50', 'S/315.00', 'S/20.50', 'S/45.60', 'S/110.35', 'S/45.00', 'S/10.50',];
const STATUS: string[] = ['Activo', 'Inactivo'];
const BENEFITS: string[] = ['Descuento', 'Obsequio'];
const USERNAME: string[] = ['DHUAMAN', 'LGUTARRA', 'MAXIMO'];

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

  constructor(public dialog: MatDialog) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      console.log(`Dialog result: ${JSON.stringify(result)}`);
    });
  }
}

function createNewUser(id: number): IProduct {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const price = PRICES[Math.round(Math.random() * (NAMES.length - 1))];
  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))];
  const benefit = BENEFITS[Math.round(Math.random() * (BENEFITS.length - 1))];
  const username = USERNAME[Math.round(Math.random() * (BENEFITS.length - 1))];

  // return { id: id.toString(), name, price, benefit, date: new Date().toISOString(), status };
  return {
    idProducto: id.toString(),
    nombreProducto: name,
    descProducto: 'descripcion dummy',
    precioProducto: price,
    idCategoriaProducto: 'string',
    indicadorAplicacion: benefit,
    flgEstado: status,
    fechaCreacion: new Date().toISOString(),
    usuarioCreacion: username,
    fechaActualizacion: new Date().toISOString(),
    usuarioActualizacion: username,
  }
}
