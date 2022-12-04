import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  tasks: string[] = [
    'Visit Ann',
    'Call Dad',
    'Go to Gym',
    'Wash the Dishs',
    'Shop for the Party',
  ];
}
