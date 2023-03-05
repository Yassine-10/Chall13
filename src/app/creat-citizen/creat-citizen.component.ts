import {Component, OnInit} from '@angular/core';
import {Citizen} from "../models/Citizen";
import {CitizenService} from "../services/citizen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creat-citizen',
  templateUrl: './creat-citizen.component.html',
  styleUrls: ['./creat-citizen.component.css']
})
export class CreatCitizenComponent implements OnInit{

  citizen: Citizen=new Citizen() ;
  types:  string []= [
    "Type A","Type B",
  ];

  submitted = false;
  file ?: any;

  constructor(private citizenService:CitizenService,
              private router: Router) { }
  onDateChange(event:any){
    this.citizen.dateNaissance= event.value;
  }
  onSubmit() {
    this.submitted = true;
    this.save()
  }
  save() {
    const formData: FormData = new FormData();
    formData.append('data',JSON.stringify(this.citizen) );
    formData.append('image', this.file);
    this.citizenService.setCin(this.citizen.cin);
    this.citizenService.createCitizen(formData).subscribe(data => {
        console.log(data)
        this.gotoDisplayCitizen();
      },
      error => console.log(error));
  }

  gotoDisplayCitizen() {
    this.router.navigate(['displayCitizen']).then(r => {});
  }

  onSelectFile(e:any){
    this.file = e.target.files[0];
  }

  ngOnInit(): void {
  }
}
