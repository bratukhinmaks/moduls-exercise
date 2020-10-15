import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {name: 'JAmes', age: 24, job: 'Kolchozni'},
    {name: 'Jully', age: 14, job: 'Bleeder'},
    {name: 'Grydorij', age: 37, job: 'Waiter'},
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job position'},
  ];
  striped: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
