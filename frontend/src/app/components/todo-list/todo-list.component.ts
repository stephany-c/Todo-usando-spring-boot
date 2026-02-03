import { Component, EventEmitter, Input, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, TodoItemComponent],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
    @Input({ required: true }) todos!: Todo[];
    @Output() toggleTodo = new EventEmitter<Todo>();
    @Output() deleteTodo = new EventEmitter<number>();
}
