import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
    @Input({ required: true }) todo!: Todo;
    @Output() toggle = new EventEmitter<Todo>();
    @Output() delete = new EventEmitter<number>();

    onToggle(): void {
        this.toggle.emit(this.todo);
    }

    onDelete(): void {
        if (this.todo.id !== undefined) {
            this.delete.emit(this.todo.id);
        }
    }
}
