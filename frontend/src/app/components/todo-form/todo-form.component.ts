import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
    selector: 'app-todo-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './todo-form.component.html',
    styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
    @Output() addTodo = new EventEmitter<Todo>();

    submitted = signal(false);

    newTodo: Todo = {
        nome: '',
        descricao: '',
        realizado: false,
        prioridade: 1
    };

    create(): void {
        this.submitted.set(true);

        if (this.isFormValid()) {
            this.addTodo.emit({ ...this.newTodo });
            this.resetNewTodo();
        }
    }

    isFormValid(): boolean {
        return this.newTodo.nome.trim().length >= 3 &&
            this.newTodo.nome.length <= 50 &&
            this.newTodo.descricao.trim().length > 0;
    }

    private resetNewTodo(): void {
        this.newTodo = {
            nome: '',
            descricao: '',
            realizado: false,
            prioridade: 1
        };
        this.submitted.set(false);
    }
}
