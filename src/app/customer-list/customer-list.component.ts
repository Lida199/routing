import { Component, OnInit } from '@angular/core';
import customerList from '../../assets/customer-list.json';
import { CustomerList } from '../model/customers.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  list: CustomerList[] = customerList;

  constructor() {}

  ngOnInit(): void {}
}
