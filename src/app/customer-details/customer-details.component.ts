import { Component, OnInit } from '@angular/core';
import customerDetails from '../../assets/customer-details.json';
import { CustomerDetails } from '../model/customers.interface';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  details: CustomerDetails[] = customerDetails;

  constructor() {}

  ngOnInit(): void {}
}
