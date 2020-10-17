import { Data } from '@angular/router';

export interface Product {
    total: number;
    limit: number;
    skip:  number;
    data:  Data[];
}