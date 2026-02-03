package com.example.todolist.service;
import com.example.todolist.entity.Todo;
import com.example.todolist.repository.TodoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {
    private TodoRepository todoRepository;
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }
 //criando item na lista
    public List<Todo> create(Todo todo){
        todoRepository.save(todo);
        return list();
    }
   //retornando a lista
    public List<Todo> list(){
        Sort sort = Sort.by("prioridade").descending().and
                (Sort.by("nome").ascending());
        return todoRepository.findAll(sort);
    }
    //atualizando item na lista
    public List<Todo> update(Todo todo){
        todoRepository.save(todo);
        return list();
    }
    //deletando item na lista
    public List<Todo>delete(Long id) {
    todoRepository.deleteById(id);
    return list();
    }











}
