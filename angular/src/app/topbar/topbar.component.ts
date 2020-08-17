import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router:Router
    ) { }

  ngOnInit(): void {}

  private query:String="";

  public searchForFriends(){
    this.router.navigate(['/search-results',{query:this.query}])
  }
}
