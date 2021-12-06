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
