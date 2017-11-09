import { Component } from '@angular/core';

@Component({
  selector: 'egm-list',
  template: `
  <mat-list>
    <h4 matSubheader> List 1 </h4>
    <mat-list-item *ngFor="let item of items">
      <h4 matLine> {{ item.name }} </h4>
      <p matLine> {{ item.description }} </p>
    </mat-list-item>
    <mat-divider> </mat-divider>
    <h4 matSubheader> List 2 </h4>
    <mat-list-item *ngFor="let item of items">
      <h4 matLine> {{ item.name }} </h4>
      <p matLine> {{ item.description }} </p>
    </mat-list-item>
  </mat-list>
  <mat-selection-list #selectList>
    <mat-list-option
      *ngFor="let item of items"
      checkboxPosition="left"
      (click)="logChange(selectList.selectedOptions.selected)">
      {{ item.name }}
    </mat-list-option>
  </mat-selection-list>
  `
})
export class ListLessonComponent {
  public items = [
    { name: 'Item 1', description: 'This is a description' },
    { name: 'Item 2', description: 'Another description!' }
  ];

  logChange(event) {
    console.log(event);
  }
}
