import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product'; 
import { ProductService } from '../../services/product.services';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  productId = '';
  product: Product | undefined;
  saved = false;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.product = this.productServices.getProductById(id);
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  goBack(): void {
    this.router.navigate(['/products-list']);
  }

  save(): void {
    if (this.product) {
      this.productServices.updateProduct(this.product);
      this.saved = true;
      this.isEditing = false;
      setTimeout(() => (this.saved = false), 2500);
    }
  }
}
