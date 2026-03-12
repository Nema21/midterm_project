import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet,  } from '@angular/router';

import { ProductService } from '../../services/product.services';
import { Product } from '../../models/product';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})
export class ProdListComponent implements OnInit {

  products: Product[]=[];
  returntUrl: string | null = null;
  searchPlaceHolder:string="Search by name, Product..."
  selectId:number|null=null;
  searchTerm = '';
  showModal: boolean = false;
  selectedProduct: Product | null = null;

  constructor(
    private productServices: ProductService,
    private route: ActivatedRoute,
    private router: Router

  ){}
  ngOnInit() {
  this.products = this.productServices.getProducts();
}
  getProduct(p: Product): void {
  this.selectId = p.id;
  this.router.navigate(['/prodManagement/view-details', p.id, 'details']);
  // this.selectedProduct = products;
  this.showModal = true;
}
closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }

get filteredProducts(): Product[] {
  const term = this.searchTerm.toLowerCase();
  return this.products.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.category.toLowerCase().includes(term)
  );
}

}
