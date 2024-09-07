import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fourniseur',
  templateUrl: './page-fourniseur.component.html',
  styleUrls: ['./page-fourniseur.component.scss']
})
export class PageFourniseurComponent {

constructor(private router : Router) 
{}

Nouveaufourniseur():void {
 this.router.navigate(['nouveaufournisseur']);
}

}
