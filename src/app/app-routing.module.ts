import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';



const routes: Routes = [
  { path: "produits", component: ProduitsComponent },
  { path: "add-produit", component: AddProduitComponent },
  { path: "updateProduit/:id", component: UpdateProduitComponent },
  { path: "rechercheParCategorie", component: RechercheParCategorieComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "", redirectTo: "produits", pathMatch: "full" },
  {path: "listeCategories", component : ListeCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
