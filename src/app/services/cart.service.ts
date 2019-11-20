import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Shoes',
      expanded: true,
      products: [
        { id: 0, name: 'Nike', price: '199' },
        { id: 1, name: 'Addidas', price: '149' },
        { id: 2, name: 'Balenciaga', price: '179' },
        { id: 3, name: 'Jordans', price: '499' }
      ]
    },
    {
      category: 'Pants',
      products: [
        { id: 4, name: 'Men', price: '1499' },
        { id: 5, name: 'Women', price: '999' }
      ]
    },
    {
      category: 'Shirts and T-shirts',
      products: [
        { id: 6, name: 'Black', price: '499' },
        { id: 7, name: 'Violet', price: '999' },
        { id: 8, name: 'Green', price: '349' }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
