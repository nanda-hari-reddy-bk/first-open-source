package com.in28minutes.rest.webservices.restfulwebservices.todo;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class TodoServiceDeprecated {
	
	private static List<Todo> todos = new ArrayList<>();
	
	private static int todosCount = 0;
	
	static {
		todos.add(new Todo(++todosCount, "Nanda","Get AWS Certified", 
							LocalDate.now().plusYears(10), false ));
		todos.add(new Todo(++todosCount, "Nanda","Learn DevOps", 
				LocalDate.now().plusYears(11), false ));
		todos.add(new Todo(++todosCount, "Nanda","Learn Cyber Security", 
				LocalDate.now().plusYears(13), false ));
		todos.add(new Todo(++todosCount, "Nanda","Learn Full Stack Development", 
				LocalDate.now().plusYears(12), false ));
	}
	
	public List<Todo> findByUsername(String username){
		Predicate<? super Todo> predicate = 
				todo -> todo.getUsername().equalsIgnoreCase(username);
		return todos.stream().filter(predicate).toList();
	}
	
	public Todo addTodo(String username, String description, LocalDate targetDate, boolean done) 
	{
		Todo todo = new Todo(++todosCount,username,description,targetDate,done);
		todos.add(todo);
		return todo;
	}
	
	public void deleteById(int id) {
		Predicate<? super Todo> predicate = todo -> todo.getId() == id;
		todos.removeIf(predicate);
	}

	public Todo findById(int id) {
		Predicate<? super Todo> predicate = todo -> todo.getId() == id;
		Todo todo = todos.stream().filter(predicate).findFirst().get();
		return todo;
	}

	public void updateTodo(int id,  Todo todo) 
	{
		Predicate<Todo> pr = toDo ->  toDo.getId()==id;
		Todo found =  todos.stream().filter(pr).findFirst().get();
		found.setDescription(todo.getDescription());
		found.setTargetDate(todo.getTargetDate());
	}
}