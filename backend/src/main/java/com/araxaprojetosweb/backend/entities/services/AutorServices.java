package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.services.exceptions.DatabaseExceptionOwn;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.AutorRepository;

@Service
public class AutorServices {
	@Autowired
	private AutorRepository repository;

	@Transactional(readOnly = true)
	public List<Autor> findAll() {
		return repository.findAll();
	}

	@Transactional(readOnly = true)
	public Autor findById(Long id) {
		Optional<Autor> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public Autor insert(Autor obj) {
		return repository.save(obj);
	}

	@Transactional
	public Autor atualizar(Long id, Autor obj) {
		Autor result = repository.getReferenceById(id);
		updateObj(result, obj);
		return repository.save(result);
	}

	public void remover(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseExceptionOwn(e.getMessage());
		}
	}

	private void updateObj(Autor result, Autor obj) {
		result.setBio(obj.getBio());
		result.setEmail(obj.getEmail());
		result.setFoto(obj.getFoto());
		result.setNome(obj.getNome());
		result.setUsuario(obj.getUsuario());
	}

}
