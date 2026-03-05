import { Component } from '@angular/core';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  showModal: boolean = false;
  selectedProduct?: Product;

  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 45000,
      stock: 12,
      status: "Available",
      description: "High performance laptop",
      brand: "Dell",
      rating: 4.5,
      supplier: "TechSupply"
    },
    {
      id: 2,
      name: "Headphones",
      category: "Electronics",
      price: 1500,
      stock: 0,
      status: "Out of Stock",
      description: "Noise cancelling headphones",
      brand: "Sony",
      rating: 4.6,
      supplier: "AudioWorld"
    },
    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      price: 800,
      stock: 5,
      status: "Limited",
      description: "Mechanical keyboard",
      brand: "Logitech",
      rating: 4.3,
      supplier: "TechSupply"
    },
    {
      id: 4,
      name: "Mouse",
      category: "Accessories",
      price: 500,
      stock: 20,
      status: "Available",
      description: "Wireless mouse",
      brand: "HP",
      rating: 4.1,
      supplier: "TechSupply"
    },
    {
      id: 5,
      name: "Monitor",
      category: "Electronics",
      price: 8000,
      stock: 6,
      status: "Available",
      description: "24 inch LED monitor",
      brand: "Samsung",
      rating: 4.4,
      supplier: "DisplayHub"
    },
    {
      id: 6,
      name: "USB Flash Drive",
      category: "Storage",
      price: 300,
      stock: 30,
      status: "Available",
      description: "32GB USB drive",
      brand: "Sandisk",
      rating: 4.2,
      supplier: "MemoryStore"
    },
    {
      id: 7,
      name: "External Hard Drive",
      category: "Storage",
      price: 3500,
      stock: 4,
      status: "Limited",
      description: "1TB external HDD",
      brand: "Seagate",
      rating: 4.5,
      supplier: "MemoryStore"
    },
    {
      id: 8,
      name: "Webcam",
      category: "Accessories",
      price: 1200,
      stock: 10,
      status: "Available",
      description: "HD webcam for meetings",
      brand: "Logitech",
      rating: 4.0,
      supplier: "VideoTech"
    },
    {
      id: 9,
      name: "Gaming Chair",
      category: "Furniture",
      price: 7000,
      stock: 2,
      status: "Limited",
      description: "Comfortable gaming chair",
      brand: "Razer",
      rating: 4.7,
      supplier: "GameHub"
    },
    {
      id: 10,
      name: "Smartphone",
      category: "Electronics",
      price: 25000,
      stock: 0,
      status: "Out of Stock",
      description: "Latest Android smartphone",
      brand: "Samsung",
      rating: 4.8,
      supplier: "MobileTech"
    }
  ];

  viewProductDetails(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}