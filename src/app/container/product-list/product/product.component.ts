import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: {
    id: number,
    name: string,
    description: string,
        brand: string,
    gender: string,
    category: string,
    size: number[],
    color:number[],
    price: number,
    discountPrice?:number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL:string, 
    slug:string
  } 

  errorImg = 'https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$';

  showErrorimg(event: any) {
    event.target.src = this.errorImg;
  }
}
