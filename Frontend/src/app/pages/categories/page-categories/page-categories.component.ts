import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent {

  constructor(private router: Router) {

  }
nouvelCategories() {
 this.router.navigate(['nouvellecategorie']);
}

}
