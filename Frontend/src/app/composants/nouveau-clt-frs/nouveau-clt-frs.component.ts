import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent {
  origin =' ' ; 

  constructor(private activatedroute : ActivatedRoute 
              , private router : Router
  )
  {
  
  }
  
  ngOnInit() {
    this.activatedroute.data.subscribe( data => {
      this.origin = data['origin'] ; 
    })
  }
  saveClick():void {
  }
  CancelClick() : void  {
  
    if( this.origin && this.origin ===  'client' ) {
      this.router.navigate(['clients']) ; 
    }
    else if ( this.origin && this.origin ===  'Fournisseur' ) {
      this.router.navigate(['fournisseurs']) ; 
    }
   }
  }
