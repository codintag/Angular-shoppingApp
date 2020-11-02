import { Injectable, OnInit} from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository {
    private categories: Category[] = [];

    constructor(private restService: RestService) {
        this.restService.getAllCategories()
        .subscribe(categories => this.categories = categories);
    }

    ngOnInit(){
        
    }

    getCategory(id: number):Category {
        return this.categories.find(i => i.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

}