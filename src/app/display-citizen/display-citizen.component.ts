import {Component, OnInit} from '@angular/core';
import {CitizenService} from "../services/citizen.service";

import {Citizen} from "../models/Citizen";
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-display-citizen',
  templateUrl: './display-citizen.component.html',
  styleUrls: ['./display-citizen.component.css']
})
export class DisplayCitizenComponent implements OnInit{
  Image: any;
  data:any;
  date:string='';
  public citizen: Citizen=new Citizen() ;
  public myAngularxQrCode:string='';
  constructor(private citizenService:CitizenService,
            ) {


  }

  ngOnInit(): void {
   this.getCitizen();
  }
  getCitizen(){
    this.citizenService.getCitizenByCin().subscribe(data=>{
      this.data=data;
      this.citizen=this.data;
      this.myAngularxQrCode= 'Nom '+this.citizen.nom + '\n'+'Prenom '+this.citizen.prenom +'\n' + 'CIN '+this.citizen.cin+'\n'+ 'Profession '+this.citizen.profession+'\n'
      this.Image='data:image/jpeg;base64,'+this.citizen.image;
    },err=>{
      console.log(err);
    })


  }

  makePDF(){
   const options={
     filename:'carte.pdf',
     image:{type:"jpeg"},
     html2canvas:  { scale: 2 },
     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
   };


   var content=document.getElementById('card');
   html2pdf().from(content).set(options).save();

  }

}
