import { Component } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: "shop",
    templateUrl: "shop.component.html",
    styles: [`
    .pt-100 {padding-top: 100px;}
    .imgHeight {height: 350px; padding-top: 10px;}`]
})

export class ShopComponent {
    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository
    ) {}

    get getProducts(): Product[] {
        return this.productRepository.getProducts();
    }

    get getCategories(): Category[] {
        return this.categoryRepository.getCategories();
    }
}