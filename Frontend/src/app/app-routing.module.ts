import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionnComponent} from "./pages/page-inscriptionn/page-inscriptionn.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./page-statistiques/page-statistiques.component";
import {PageMvstkComponent} from "./mvstk/page-mvstk/page-mvstk.component";
 import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFourniseurComponent} from "./pages/fourniseur/page-fourniseur/page-fourniseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {DetailCltFrsComponent} from "./composants/detail-clt-frs/detail-clt-frs.component";
 import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { NouvelleCodCltFrsComponent } from './composants/nouvelle-cod-clt-frs/nouvelle-cod-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';




const routes: Routes = [
  { path : "login" , component : PageLoginComponent } ,
  {path : "inscrire" , component : PageInscriptionnComponent},
  {path : "" , component : PageDashboardComponent,
  children : [
    {path : 'statistiques',
    component : PageStatistiquesComponent},
    {path : 'articles',
    component: PageArticleComponent},
    {path : 'nouvel-article',
      component:  NouvelArticleComponent},
    {path : 'mvstk',
      component:  PageMvstkComponent},
    {path : 'clients',
      component:  PageClientComponent},
    {path : 'Nouveauclient',
      component: NouveauCltFrsComponent,
      data: {
        origin: 'client' // Make sure to provide a value here
      } },

    {path : 'fournisseurs',
      component:  PageFourniseurComponent,
     },


    {path : 'nouveaufournisseur',
  component: NouveauCltFrsComponent,
   data: {
    origin: 'Fournisseur' // Make sure to provide a value here
  } },
  {path : 'commandefourniseur',
    component:  PageCmdCltFrsComponent,
    data: {
      origin: 'fournisseur' // Make sure to provide a value here
    }},
  
  {
    path: 'commandesclient',
    component: PageCmdCltFrsComponent,
    data: {
      origin: 'client' // Make sure to provide a value here
    }
  },
    {
      path: 'nouvellecommandefrs',
      component: NouvelleCodCltFrsComponent,
    data : {
      origin : 'fournisseur'
    }},
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCodCltFrsComponent,
      data : {
        origin : 'client'
      }},
      
    {
      path: 'categories',
      component: PageCategoriesComponent} ,
    {
       path: 'nouvellecategorie',
      component:  NouvelleCategorieComponent},
      {
        path: 'utilisateurs',
       component:  PageUtilisateurComponent},
       {
        path: 'nouvelutilisateur' ,
        component : NouvelUtilisateurComponent
       }, {
       path: 'profil' ,
       component : PageProfilComponent
      },
      {
        path: 'changermotdepasse' ,
        component : ChangerMotDePasseComponent
       }

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
