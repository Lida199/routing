import { Component, OnInit } from '@angular/core';
import customerDetails from '../../assets/customer-details.json';
import { CustomerDetails } from '../model/customers.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  details: CustomerDetails[] = customerDetails;
  selectedUser: CustomerDetails | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];
    if (userId) {
      this.selectedUser = this.details.find((a) => a.id == userId);
    }
  }
}
