import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users!: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getApiData().subscribe(data => {
      this.users = data;
      console.log(this.users)
    
    })
  }

}
