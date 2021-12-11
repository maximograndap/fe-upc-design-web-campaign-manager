import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICampaign } from 'src/app/interfaces/campaign.interface';
import { CampaignService } from 'src/app/services/campaign.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
  ],
  styleUrls: ['./campaign-detail.component.scss',]
})
export class CampaignDetailComponent implements OnInit {

  title: string;
  form: FormGroup;
  campaignRequest: ICampaign;
  isNewRecord: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICampaign, private dialogRef: MatDialogRef<CampaignDetailComponent>,
    public fb: FormBuilder, private campaignService: CampaignService) {
    console.log('DATA ENTRANTE : ', JSON.stringify(data));
    this.isNewRecord = data.idCampania ? false : true;
    if (this.isNewRecord) {
      this.title = 'NUEVA CAMPAÑA';
      this.campaignRequest = {
        nombreCampania: '',
        descCampania: '',
        fechaInicio: '',
        fechaFin: '',
        idTipoCampania: '',
        idTipoBeneficio: '',
      };
    } else {
      this.title = 'ACTUALIZAR CAMPAÑA';
      this.campaignRequest = { ...data, idTipoBeneficio: String(data.idTipoBeneficio), idTipoCampania: String(data.idTipoCampania) };
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
      this.campaignService.add(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    } else {
      this.campaignService.update(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    }

    this.dialogRef.close({ data: this.form.value })
  }

  ngOnInit(): void {
    const pr = this.campaignRequest;
    this.form = this.fb.group({
      idCampania: [pr.idCampania],
      nombreCampania: [pr.nombreCampania, [Validators.required, Validators.minLength(5)]],
      descCampania: [pr.descCampania, [Validators.maxLength(60)]],
      fechaInicio: [pr.fechaInicio, [Validators.required]],
      fechaFin: [pr.fechaFin, [Validators.required]],
      idTipoCampania: [pr.idTipoCampania],
      idTipoBeneficio: [pr.idTipoBeneficio],
      flgEstado: [pr.flgEstado === 'A' ? 'ACTIVO' : 'INACTIVO'],
      fechaCreacion: [pr.fechaCreacion],
      usuarioCreacion: [pr.usuarioCreacion],
      fechaActualizacion: [pr.fechaActualizacion],
      usuarioActualizacion: [pr.usuarioActualizacion],
    })
  }

}
