import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  todos: WritableSignal<Todo[]> = signal([]);

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.todoService.list().subscribe({
      next: (todos) => {
        this.todos.set(todos);
      },
      error: (err) => {
        console.error('Erro ao listar todos:', err);
      }
    });
  }

  onAddTodo(todo: Todo): void {
    this.todoService.create(todo).subscribe({
      next: (todos) => {
        this.todos.set(todos);
      },
      error: (err) => {
        console.error('Erro ao criar todo:', err);
      }
    });
  }

  onUpdateTodo(todo: Todo): void {
    this.todoService.update(todo).subscribe({
      next: (todos) => {
        this.todos.set(todos);
      },
      error: (err) => {
        console.error('Erro ao atualizar todo:', err);
      }
    });
  }

  onDeleteTodo(id: number): void {
    this.todoService.delete(id).subscribe({
      next: (todos) => {
        this.todos.set(todos);
      },
      error: (err) => {
        console.error('Erro ao deletar todo:', err);
      }
    });
  }

  onToggleTodo(todo: Todo): void {
    const updatedTodo = { ...todo, realizado: !todo.realizado };
    this.onUpdateTodo(updatedTodo);
  }
}
