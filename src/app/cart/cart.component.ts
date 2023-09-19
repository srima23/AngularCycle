import { Component } from '@angular/core';
import { CycleService } from '../CycleService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private id = 1;  // Replace with the actual cycle ID

  constructor(private cycleService: CycleService) { }

  addToCart() {
    const count = 1;  // You can adjust the count as needed
    this.cycleService.borrowCycle(this.id, count)
      .subscribe(
        response => {
          console.log('Cycle added to cart successfully.', response);
          // Add logic to update cart in the frontend as needed
        },
        error => {
          console.error('Error adding cycle to cart.', error);
        }
      );
  }
}

