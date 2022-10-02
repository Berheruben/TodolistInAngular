import { Component, OnInit } from '@angular/core';
import { AppServicesService } from './app-services.service';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  taskJSON: any;
  newTodo: string = ""

  constructor(private service:AppServicesService) { }

ngOnInit() {
  this.service.loadData()
}
toggleDone(id: number) {
    this.todos.map((a, b) => {
      if (b === id) a.completed = !a.completed
  })
    this.todos.sort((a, _) => a.completed ? 1 : -1)
}

  toggleDelete(id: Number) {
    this.todos = this.todos.filter((a, b) => b !== id)
  }

addTodo() {
  if (this.newTodo === "") alert("inserisci una task")
    else {
      this.todos.push({
        text: this.newTodo,
        completed: false
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
      this.newTodo = ""
    }
  }

}
