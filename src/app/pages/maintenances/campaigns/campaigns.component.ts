import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignConfigComponent } from './campaign-config/campaign-config.component';
import { ICampaign } from 'src/app/interfaces/campaign.interface';
import { CampaignService } from 'src/app/services/campaign.service';
import { IResponse } from 'src/app/interfaces/response.interface';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})

export class CampaignsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idCampania', 'nombreCampania', 'fechaInicio', 'fechaFin', 'flgEstado', 'fechaCreacion', 'usuarioCreacion', 'flgConfigurar'];

  dataSource: MatTableDataSource<ICampaign>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private campaignService: CampaignService) {
    this.listarCampanias()
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

  openFormDetail(row?: ICampaign) {

    if (row) {
      this.campaignService.get(row?.idCampania)
        .subscribe(response => {
          console.log('RESPONSE DETALLE CAMPAÑA : ', response);
          const campaign: ICampaign = response.data as ICampaign;

          const dialogRef = this.dialog.open(CampaignDetailComponent, { data: { ...campaign } });

          dialogRef.afterClosed()
            .subscribe(result => {
              this.listarCampanias()
            });
        })
    } else {
      const dialogRef = this.dialog.open(CampaignDetailComponent, { data: {} });

      dialogRef.afterClosed()
        .subscribe(result => {
          this.listarCampanias()
        });
    }


  }

  openFormConfig(row?: ICampaign) {

    this.campaignService.get(row?.idCampania)
      .subscribe(response => {
        const campaign: ICampaign = response.data as ICampaign;
        const dialogRef = this.dialog.open(CampaignConfigComponent, { data: { ...campaign } });

        dialogRef.afterClosed()
          .subscribe(result => {
            this.listarCampanias()
          });
      })

  }

  listarCampanias() {
    this.campaignService.list()
      .subscribe((response: IResponse) => {
        const data: ICampaign[] = response.data as ICampaign[]
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
}

