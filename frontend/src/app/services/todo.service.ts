import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private apiUrl = 'http://localhost:8080/todos';

    constructor(private http: HttpClient) { }

    list(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl);
    }

    create(todo: Todo): Observable<Todo[]> {
        return this.http.post<Todo[]>(this.apiUrl, todo);
    }

    update(todo: Todo): Observable<Todo[]> {
        return this.http.put<Todo[]>(this.apiUrl, todo);
    }

    delete(id: number): Observable<Todo[]> {
        return this.http.delete<Todo[]>(`${this.apiUrl}/${id}`);
    }
}
