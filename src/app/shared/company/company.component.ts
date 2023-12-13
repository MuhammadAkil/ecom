import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(private http:HttpClient){}

  createProduct(products:{productName:any,productDesc:any,productPrice:any}){
    this.http.post('https://angular-app-b5b9d-default-rtdb.firebaseio.com/products.json',products).subscribe((res)=>{
      console.log(res)
    })
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
     console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     return false;
     }
    
}
