import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> item</li>
    </ul>

    <pagination-controls (pageChange)="p = $event"></pagination-controls>
  `
})

export class AppComponent {
  p = 1;
  collection: any[] = ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'];
}
