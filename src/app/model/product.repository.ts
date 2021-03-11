import { Injectable, OnInit} from '@angular/core';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRepository {
    private products: Product[] = [];

    constructor(private restService: RestService) {
        this.restService.getAllProducts()
        .subscribe(products => this.products = products);
    }

    ngOnInit(){
        
    }

    getProduct(id: number):Product {
        return this.products.find(i => i.id === id);
    }

    getProducts(): Product[] {
        return this.products;
    }

}