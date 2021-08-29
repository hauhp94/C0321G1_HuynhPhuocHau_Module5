import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "./todo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = "http://localhost:3000/todoList";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.API_URL + "/" + id);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + "/" + id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(this.API_URL + "/" + todo.id, todo);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.httpClient.post(this.API_URL, todo)
  }
}
