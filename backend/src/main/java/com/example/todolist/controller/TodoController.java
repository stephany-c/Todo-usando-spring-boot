package com.example.todolist.controller;

import com.example.todolist.entity.Todo;
import com.example.todolist.service.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@Tag(name = "Todo", description = "Endpoints para gerenciamento de tarefas")
public class TodoController {

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    private TodoService todoService;

    @Operation(summary = "Cria uma nova tarefa", description = "Adiciona uma tarefa à lista e retorna a lista atualizada")
    @PostMapping
    List<Todo> create(@RequestBody @Valid Todo todo) {
        return todoService.create(todo);

    }

    @Operation(summary = "Lista todas as tarefas", description = "Retorna a lista de tarefas ordenada por prioridade (desc) e nome (asc)")
    @GetMapping
    List<Todo> list() {
        return todoService.list();
    }

    @Operation(summary = "Atualiza uma tarefa", description = "Modifica uma tarefa existente e retorna a lista atualizada")
    @PutMapping
    List<Todo> update(@RequestBody @Valid Todo todo) {
        return todoService.update(todo);
    }

    @Operation(summary = "Deleta uma tarefa", description = "Remove uma tarefa por ID e retorna a lista atualizada")
    @DeleteMapping("{id}")
    List<Todo> delete(@PathVariable("id") Long id) {
        return todoService.delete(id);
    }
}
