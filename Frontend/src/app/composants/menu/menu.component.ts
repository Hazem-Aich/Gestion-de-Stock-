import { Component } from '@angular/core';
import { Menu } from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    public Properties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques'
        }
      ]
    },
{
  id: '2',
  titre: 'Articles',
  icon: 'fas fa-boxes',
  url: '',
  sousMenu: [
    {
      id: '21',
      titre: 'Articles',
      icon: 'fas fa-boxes',
      url: 'articles'
    },
    {
      id: '22',
      titre: 'Mouvements du stock',
      icon: 'fab fa-stack-overflow',
      url: 'mvstk'
    }
  ]
},
{
  id: '3',
    titre: 'Clients',
  icon: 'fas fa-users',
  url: '',
  sousMenu: [
  {
    id: '31',
    titre: 'Clients',
    icon: 'fas fa-users',
    url: 'clients'
  },
  {
    id: '32',
    titre: 'Commandes clients',
    icon: 'fas fa-shopping-basket',
    url: 'commandesclient'
  }
]
},
{
  id: '4',
  titre: 'Fournisseurs',
  icon: 'fas fa-users',
  url: '',
  sousMenu: [
  {
    id: '41',
    titre: 'Fournisseurs',
    icon: 'fas fa-users',
    url: 'fournisseurs'
  },
  {
    id: '42',
    titre: 'Commandes fournisseurs',
    icon: 'fas fa-truck',
    url: 'commandefourniseur'
  }
]
},
{
  id: '5',
    titre: 'Parametrages',
  icon: 'fas fa-cogs',
  url: '',
  sousMenu: [
  {
    id: '51',
    titre: 'Categories',
    icon: 'fas fa-tools',
    url: 'categories'
  },
  {
    id: '52',
    titre: 'Utilisateurs',
    icon: 'fas fa-users-cog',
    url: 'utilisateurs'
  }
]
}
];

    constructor(private router :Router) {
    }

  navigate(url: string): void {
      this.router.navigate([url]);

    }

}
