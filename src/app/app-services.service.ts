import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  todos: Todo[] = [];
  taskJSON: any;
  newTodo: string = ""
  constructor() { }

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
loadData(){
  let Data = localStorage.getItem('todos')
  this.todos = JSON.parse(Data as any)
  if (Data) return JSON.parse(Data)
  console.log(Data)
  return []
}
}
