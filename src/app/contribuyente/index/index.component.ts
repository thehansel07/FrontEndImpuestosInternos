import { Component, OnInit } from '@angular/core';
import { contribuyente } from '../interface/contribuyente';
import { ContribuyenteService } from '../services/contribuyente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contribuyentes : contribuyente[];

  constructor(public contribuyenteService: ContribuyenteService) { }

  ngOnInit(): void {
    this.contribuyenteService.getAllContribuyentes().subscribe((data: any) => {
      this.contribuyentes = data.data;
      console.log(this.contribuyentes);
    });
  }

}

