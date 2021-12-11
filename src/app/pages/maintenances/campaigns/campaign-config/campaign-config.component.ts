import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICampaign } from 'src/app/interfaces/campaign.interface';
import { CampaignConfigService } from 'src/app/services/campaignConfig.service';


@Component({
  selector: 'app-campaign-config',
  templateUrl: './campaign-config.component.html',
  styleUrls: ['./campaign-config.component.scss']
})

export class CampaignConfigComponent implements OnInit {

  title: string;
  form: FormGroup;
  campaignRequest: ICampaign;
  isNewRecord: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICampaign, private dialogRef: MatDialogRef<CampaignConfigComponent>,
    public fb: FormBuilder, private campaignService: CampaignConfigService) {
    console.log('DATA ENTRANTE : ', JSON.stringify(data));
    this.isNewRecord = data.idCampania ? false : true;
    if (this.isNewRecord) {
      this.title = 'NUEVO CAMPAÑA';
      this.campaignRequest = {
        nombreCampania: '',
        descCampania: '',
        fechaInicio: '',
        fechaFin: '',
        idTipoCampania: '',
        idTipoBeneficio: '',
      };
    } else {
      this.title = 'CONFIGURAR CAMPAÑA';
      this.campaignRequest = { ...data, idTipoBeneficio: String(data.idTipoBeneficio), idTipoCampania: String(data.idTipoCampania) };
    }
  }

  errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  cancel() {
    this.dialogRef.close({ data: 'you cancelled' })
  }

  submitFormConf() {

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
      nombreRegla: "",
      idCriterio:"",
      idCampoRegla:"",
      idCondiCompara:"",
      ValorCriterio:"",
      idOperadorCompara:"",
      idProducto1:"",
      idProducto2:"",
      idBono1:"",
      idBono2:"",
      descCampania: [pr.descCampania, [Validators.maxLength(60)]],
      fechaInicio: [pr.fechaInicio, [Validators.required]],
      fechaFin: [pr.fechaFin, [Validators.required]],
      idTipoCampania: [pr.idTipoCampania],
      idTipoBeneficio: [pr.idTipoBeneficio],
      flgEstado: [pr.flgEstado === 'A' ? 'ACTIVO' : 'INACTIVO'],
      flgConfigurar:"",
      fechaCreacion: [pr.fechaCreacion],
      usuarioCreacion: [pr.usuarioCreacion],
      fechaActualizacion: [pr.fechaActualizacion],
      usuarioActualizacion: [pr.usuarioActualizacion],
    })
  }

}
