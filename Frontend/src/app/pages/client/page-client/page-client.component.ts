import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent {

  constructor(private router : Router ) {

  }
  Nouveauclient():void {
  this.router.navigate(['Nouveauclient']);
}

}
