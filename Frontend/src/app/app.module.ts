import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionnComponent } from './pages/page-inscriptionn/page-inscriptionn.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { PageMvstkComponent } from './mvstk/page-mvstk/page-mvstk.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import {DetailMvtStkArticleComponent} from "./composants/detail-mvt-stk-article/detail-mvt-stk-article.component";
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFourniseurComponent } from './pages/fourniseur/page-fourniseur/page-fourniseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { NouvelleCodCltFrsComponent } from './composants/nouvelle-cod-clt-frs/nouvelle-cod-clt-frs.component';
 import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
 import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionnComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
     DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
     PageMvstkComponent,
    DetailMvtStkComponent,
    DetailMvtStkArticleComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFourniseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    PageArticleComponent,
    NouvelArticleComponent,
    NouvelleCodCltFrsComponent,
     PageCategoriesComponent,
     NouvelleCategorieComponent,
     PageUtilisateurComponent,
     DetailUtilisateurComponent,
     NouvelUtilisateurComponent,
     PageProfilComponent,
     ChangerMotDePasseComponent,
     PageCmdCltFrsComponent,
     DetailCmdComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
