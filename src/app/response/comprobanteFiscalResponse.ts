import {comprobanteFiscales} from "../contribuyente/interface/comprobantesFiscales";


export interface ResponseComprobanteFiscal {
  isSuccess: string,
  data:[comprobanteFiscales],
  message:string,
  errors:string
}
