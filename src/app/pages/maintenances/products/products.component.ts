import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  price: string;
  benefit: string;
  date: string;
  status: string;
}

const NAMES: string[] = [
  'Clindamicina 600mg', 'Levofloxacino 600mg', 'Neurobion 500mg', 'Neurobion 800mg', 'Levofloxacino 300mg', 'Clindamicina 600mg', 'Amoxixilina 500', 'Naproxeno 500'
];

const PRICES: string[] = ['S/ 40.00', 'S/35.00', 'S/120.50', 'S/315.00', 'S/20.50', 'S/45.60', 'S/110.35', 'S/45.00', 'S/10.50',];
const STATUS: string[] = ['Activo', 'Inactivo'];
const BENEFITS: string[] = ['Descuento', 'Obsequio']

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'beneficio', 'fecha', 'estado'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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
}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const price = PRICES[Math.round(Math.random() * (NAMES.length - 1))];
  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))];
  const benefit = BENEFITS[Math.round(Math.random() * (BENEFITS.length - 1))];

  return { id: id.toString(), name, price, benefit, date: new Date().toISOString(), status };
}
