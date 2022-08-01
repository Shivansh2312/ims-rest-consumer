// these imports are pre-defined
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// these imports are user defined
import { AuthenticationService } from '../authentication.service';
import { Dealeraddress } from '../dealeraddress';



@Component({
  selector: 'app-dealers-list',
  templateUrl: './dealers-list.component.html',
  styleUrls: ['./dealers-list.component.css']
})
export class DealersListComponent implements OnInit {

  dealers: Observable<Dealeraddress[]> | any;
  
  constructor(private as: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    return this.reloadData();
  }

  reloadData(){
    this.dealers = this.as.getDealersList();
  }

}
