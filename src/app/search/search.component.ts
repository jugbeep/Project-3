import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	results: object []

  constructor(
  	private http: Http,
  	) { }

  ngOnInit() {
  }

  findMonster() {
		console.log('I want to search http://dnd5eapi.co/api/');
		this.http.get('http://dnd5eapi.co/api/monsters/')		
		.toPromise()
    // .then(response => this.results )
	  //.then(response => console.log(response.json().results));
		.then(response => this.results = response.json().results);
	}

}

