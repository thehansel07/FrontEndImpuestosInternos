import { Component, OnInit } from '@angular/core';
import { comprobanteFiscales } from '../interface/comprobantesFiscales';
import { ContribuyenteService } from '../services/contribuyente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseComprobanteFiscal } from 'src/app/response/comprobanteFiscalResponse';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rncCedula!: string;
  persona!: any;
  comprobanteFiscales: comprobanteFiscales[] = [];
  total:number;


  constructor(public contribuyenteService: ContribuyenteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.rncCedula = this.route.snapshot.params['rncCedula'];
    this.contribuyenteService
    .findComprobanteFiscalesByIdentifier(this.rncCedula)
    .subscribe((data: any) => {
      if(data.data != null){
        this.comprobanteFiscales = data.data;
        let sum = 0;
        for(let i = 0; i < this.comprobanteFiscales.length; i++){
         sum += this.comprobanteFiscales[i].itbis18;
         }
         this.total = sum;
      }
      else
      {
        //En caso de no tener comprobante fiscal no va pasar de la pantala principal
        this.router.navigateByUrl('');
      }

    });

  }

}
