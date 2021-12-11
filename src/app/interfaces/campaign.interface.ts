export interface ICampaign {
  idCampania?: string;
  nombreCampania: string;
  descCampania: string;
  fechaInicio: string;
  fechaFin: string;
  idTipoCampania: string;
  nombreTipoCampania?: string;
  idTipoBeneficio: string;
  nombreBeneficio?: string;
  flgEstado?: string;
  fechaCreacion?: string;
  usuarioCreacion?: string;
  fechaActualizacion?: string;
  usuarioActualizacion?: string;
}


export interface ICampaignConfig {
  idCampania: string;
  nombreCampania: string;
  nombreRegla: string;
  idCriterio: string;
  idCampoRegla: string;
  idCondiCompara: string;
  ValorCriterio: string;
  idOperadorCompara: string;
  idProducto1: string;
  idProducto2: string;
  idBono1: string;
  idBono2: string;
  descCampania: string;
  fechaInicio: string;
  fechaFin: string;
  idTipoCampania: string;
  idTipoBeneficio: string;
  flgEstado: string;
  flgConfigurar: string;
  fechaCreacion: string;
  usuarioCreacion: string;
  fechaActualizacion: string;
  usuarioActualizacion: string;
}


