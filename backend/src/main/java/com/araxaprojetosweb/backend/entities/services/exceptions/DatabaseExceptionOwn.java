package com.araxaprojetosweb.backend.entities.services.exceptions;

public class DatabaseExceptionOwn extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public DatabaseExceptionOwn(String msg) {
		super(msg);
	}
}
