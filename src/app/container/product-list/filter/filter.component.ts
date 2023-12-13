import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


  @Input() all:any=0;
  @Input() inStock:any=0;
  @Input()  outStock:any=0
  @Output() selectedFilter:EventEmitter<any>= new EventEmitter()

selected:any='all'

onfilterChanged(){
  console.log("Selected filter changed" +" "+ this.selected)
  this.selectedFilter.emit(this.selected)
}

}
