package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.restfulwebservices.Exception.ToDoNotFoundEXception;
import com.in28minutes.rest.webservices.restfulwebservices.ToDoRepository.ToDoRepository;

import jakarta.validation.Valid;

@RestController
public class ToDoController
{	
	ToDoRepository toDoRepository;
	public ToDoController(ToDoRepository toDoRepository) 
	{
		this.toDoRepository = toDoRepository;
	}

	@GetMapping(path = "basicAuth")
	public String basicAuthentication()
	{
		return "Success";
	}
	
	@PostMapping(path = "users/{username}/todos")
	public ResponseEntity<Todo> addToDo(@PathVariable String username, 
							@RequestBody  @Valid Todo todo)
	{
		Todo created = toDoRepository.save(todo);
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(created.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
	
	@GetMapping(path = "users/{username}/todos")
	public List<Todo> retrieveallTodo(@PathVariable String username)
	{
		return toDoRepository.findByUsername(username);
	}
	
	@GetMapping(path = "users/{username}/todos/{id}")
	public Todo retrieveTodoForId(@PathVariable int id)
	{
		Optional<Todo>  todo =  toDoRepository.findById(id);
		if(!todo.isEmpty()) return todo.get();
		else throw new ToDoNotFoundEXception("No ToDo available for id "+id);
	}
	
	@DeleteMapping(path = "users/{username}/todos/{id}")
	public ResponseEntity<Void> DeleteToDo(@PathVariable int id)
	{
		toDoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(path = "users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateToDo(@PathVariable int id, @RequestBody Todo todo)
	{
		Todo savedTodo =  toDoRepository.save(todo);
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("")
				.buildAndExpand(savedTodo.getId())
				.toUri();
		return ResponseEntity.created(location).build();
	}
}
