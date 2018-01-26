import { Component, OnInit } from '@angular/core';

// import { Http } from '@angular/http'; //Adding this before bust out for search component
// import 'rxjs/add/operator/toPromise'; //Moved to Search Component



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	// results: object [] //moved to search component

  constructor(
  	// private http: Http //moved to search component
  	) { }

  ngOnInit() {
  }

}
