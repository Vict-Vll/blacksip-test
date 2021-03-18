import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnChanges {
  @Input() products: Array<any>;
  total: number;
  constructor() {

  }

  ngOnChanges(): void {
    this.total = this.getTotal(this.products);
  }

  getTotal(items = []) {
    return items.map(t => parseInt(t.price)).reduce((a, b) => a + b, 0);
  }

}
