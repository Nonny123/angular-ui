import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  localData = [];

  title = 'Ignite UI - Sorting';
  constructor() { }

  ngOnInit(): void {
    this.localData = this.getProducts();
  }

  getProducts(){
    return [
      {
        "productId": 1,
        "productName": "Sony Laptop",
        "productCode": "PD-001",
        "description": "Nice Product",
        "price": 250000,
      },
      {
        "productId": 2,
        "productName": "IPhone",
        "productCode": "PD-002",
        "description": "MAC 10 OS with 32gb ROM",
        "price": 350000,
      },
      {
        "productId": 3,
        "productName": "HP Laptop",
        "productCode": "PD-003",
        "description": "Reliable with 4G RAM",
        "price": 250000,
      },
      {
        "productId": 4,
        "productName": "Solar Panel",
        "productCode": "PD-004",
        "description": "24/7 power supply to offgrid",
        "price": 250000,
      },
      {
        "productId": 5,
        "productName": "4G Router",
        "productCode": "PD-005",
        "description": "Fast Internet connection",
        "price": 250000,
      },
      {
        "productId": 6,
        "productName": "Samsung LED TV",
        "productCode": "PD-006",
        "description": "Crisp and Clear pictures",
        "price": 250000,
      },
      {
        "productId": 7,
        "productName": "Thermo cool AC",
        "productCode": "PD-007",
        "description": "Instant cooling and preservation",
        "price": 470000,
      },
      {
        "productId": 8,
        "productName": "Oxford Fan",
        "productCode": "PD-008",
        "description": "Cool breeze 24/7",
        "price": 50000,
      }

    ]
  }

}
