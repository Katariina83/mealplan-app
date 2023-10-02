import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  header?: string;
  isStrikethgough = false;

  @Input() chosenRecipe: Observable<any[]>;

  constructor() {
    
  }

  ngOnInit(): void {

  }
}
