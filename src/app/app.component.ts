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

  add(newTask: string) {
    this.tasks.push(newTask);
  }

  remove(existingTask: string) {
    let userConfirmed = confirm(
      `Are you sure that you want to remove the following task? \n ${existingTask}`
    );

    // \n line break
    // confirm() displays a confirmation as alert with ok and cancel buttons

    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }

  taskIsDone(task: string) {
    console.log('The task: "' + task + '" is done.');
  }
}
