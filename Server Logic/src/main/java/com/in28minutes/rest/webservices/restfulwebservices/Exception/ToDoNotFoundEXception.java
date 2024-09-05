package com.in28minutes.rest.webservices.restfulwebservices.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ToDoNotFoundEXception extends RuntimeException
{
	public ToDoNotFoundEXception(String message) 
	{
		super(message);
	}
}
