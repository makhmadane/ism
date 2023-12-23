import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  prenom = "ISM DIOP";

  tab = [4,5,9];
 
  constructor() { }

  ngOnInit(): void {
  }


}
