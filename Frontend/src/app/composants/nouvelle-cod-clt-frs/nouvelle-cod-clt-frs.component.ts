import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cod-clt-frs',
  templateUrl: './nouvelle-cod-clt-frs.component.html',
  styleUrls: ['./nouvelle-cod-clt-frs.component.scss']
})
export class NouvelleCodCltFrsComponent {
origin!: "";


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
}
