import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent {
  origin: "" | undefined;


  constructor(private router :Router , 
              private activateroute : ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.activateroute.data.subscribe(data =>
    {
      this.origin = data['origin'] ; 
    }
    )

  }

  nouvelleCommande() :void {
    if ( this.origin && this.origin === 'client') {
      this.router.navigate(['nouvellecommandeclt']) ;
    }
    else if (this.origin && this.origin === 'fournisseur') {
    this.router.navigate(['nouvellecommandefrs']) ;
  }
}





}
