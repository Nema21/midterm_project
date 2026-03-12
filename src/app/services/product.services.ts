import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 55000,
      stock: 15,
      status: "Available",
      description: "High performance laptop",
      brand: "Dell",
      rating: 4.5,
      createdDate: "2024-01-10"
    },
    {
      id: 2,
      name: "Phone",
      category: "Electronics",
      price: 25000,
      stock: 0,
      status: "Out of Stock",
      description: "Latest smartphone",
      brand: "Samsung",
      rating: 4.7,
      createdDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Headphones",
      category: "Accessories",
      price: 3000,
      stock: 5,
      status: "Limited",
      description: "Noise cancelling headphones",
      brand: "Sony",
      rating: 4.4,
      createdDate: "2024-02-05"
    },
    {
      id: 4,
      name: "Keyboard",
      category: "Accessories",
      price: 1500,
      stock: 20,
      status: "Available",
      description: "Mechanical keyboard",
      brand: "Logitech",
      rating: 4.3,
      createdDate: "2024-01-20"
    },
    {
      id: 5,
      name: "Mouse",
      category: "Accessories",
      price: 800,
      stock: 25,
      status: "Available",
      description: "Wireless mouse",
      brand: "HP",
      rating: 4.1,
      createdDate: "2024-01-22"
    },
    {
      id: 6,
      name: "Monitor",
      category: "Electronics",
      price: 12000,
      stock: 8,
      status: "Limited",
      description: "24 inch LED monitor",
      brand: "Acer",
      rating: 4.2,
      createdDate: "2024-02-11"
    },
    {
      id: 7,
      name: "Tablet",
      category: "Electronics",
      price: 18000,
      stock: 3,
      status: "Limited",
      description: "Portable tablet device",
      brand: "Apple",
      rating: 4.8,
      createdDate: "2024-02-15"
    },
    {
      id: 8,
      name: "Printer",
      category: "Office",
      price: 7000,
      stock: 10,
      status: "Available",
      description: "All-in-one printer",
      brand: "Canon",
      rating: 4.0,
      createdDate: "2024-02-18"
    },
    {
      id: 9,
      name: "Camera",
      category: "Electronics",
      price: 35000,
      stock: 2,
      status: "Limited",
      description: "Digital DSLR camera",
      brand: "Nikon",
      rating: 4.6,
      createdDate: "2024-02-20"
    },
    {
      id: 10,
      name: "Speaker",
      category: "Audio",
      price: 5000,
      stock: 0,
      status: "Out of Stock",
      description: "Bluetooth speaker",
      brand: "JBL",
      rating: 4.4,
      createdDate: "2024-02-22"
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if(idx !== -1) this.products[idx] = { ...updated};
  }
}