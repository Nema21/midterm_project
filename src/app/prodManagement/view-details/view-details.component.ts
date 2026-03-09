import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../models/product.interface'; 
import { ProductsServices } from '../../services/product.services';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  productId = '';
  product: Product | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServices: ProductsServices
  ) {}

  ngOnInit(): void {
 
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.product = this.productServices.getProductsById(id);
    }
  }

 
  goBack(): void {
    this.router.navigate(['/prodManagement/list']);
  }
}
