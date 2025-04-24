import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: ` 
  <div class="p-8 grid grid-cols-3 gap-4">
    @for (product of products(); track product.id) {
        <app-product-card [product]="product"/>
    }
  </div>
  `,
  styles: ``,
})
export class ProductListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Wireless Headphones',
      image: 'https://plus.unsplash.com/premium_photo-1677838847721-2bf14b48c256?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww',
      price: 99.99,
      stock: 25,
    },
    {
      id: 2,
      title: 'Smartwatch Series 5',
      image: 'https://plus.unsplash.com/premium_photo-1681336549524-ee1ba4b2881e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaGVzfGVufDB8fDB8fHww',
      price: 199.99,
      stock: 40,
    },
    {
      id: 3,
      title: 'Bluetooth Speaker',
      image: 'https://images.unsplash.com/photo-1668649176554-3ad841a780d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RofGVufDB8fDB8fHww',
      price: 59.99,
    },
    {
      id: 4,
      title: 'Gaming Mouse',
      image: 'https://images.unsplash.com/photo-1609815697866-033945af9797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaG91c2V8ZW58MHx8MHx8fDA%3DM',
      price: 49.99,
      stock: 100,
    },
    {
      id: 5,
      title: '4K Monitor',
      image: 'https://images.unsplash.com/photo-1675151638960-fc1513f8021e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDRrJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',
      price: 299.99,
      stock: 12,
    },
    {
      id: 6,
      title: 'External Hard Drive 1TB',
      image: 'https://plus.unsplash.com/premium_photo-1726869660745-9f60cdf6588b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXh0ZXJuYWwlMjBoYXJkZHJpdmV8ZW58MHx8MHx8fDA%3D',
      price: 79.99,
    },
    {
      id: 7,
      title: 'Mechanical Keyboard',
      image: 'https://images.unsplash.com/photo-1647073069959-1a3f91c7564d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
      price: 89.99,
      stock: 30,
    },
    {
      id: 8,
      title: 'USB-C Charging Cable',
      image: 'https://images.unsplash.com/photo-1572721546624-05bf65ad7679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNiJTIwYyUyMGNoYXJnaW5nfGVufDB8fDB8fHww',
      price: 14.99,
      stock: 200,
    },
    {
      id: 9,
      title: 'Laptop Stand',
      image: 'https://images.unsplash.com/flagged/photo-1576697011479-349e2a52bdf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D',
      price: 29.99,
      stock: 50,
    },
    {
      id: 10,
      title: 'Webcam 1080p',
      image: 'https://images.unsplash.com/photo-1728971975421-50f3dc9663a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGNhbXxlbnwwfHwwfHx8MA%3D%3D',
      price: 49.99,
    },
  ]);
}
