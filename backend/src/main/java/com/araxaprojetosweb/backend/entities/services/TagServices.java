package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.services.exceptions.DatabaseExceptionOwn;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.TagRepository;

@Service
public class TagServices {
	@Autowired
	private TagRepository repository;

	@Transactional(readOnly = true)
	public List<Tag> findAll() {
		return repository.findAll();
	}

	@Transactional(readOnly = true)
	public Tag findById(Long id) {
		Optional<Tag> result = repository.findById(id);
		return result.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public Tag insert(Tag obj) {
		return repository.save(obj);
	}

	@Transactional
	public Tag update(Long id, Tag obj) {
		try {
			Tag result = repository.getReferenceById(id);
			updateObj(result, obj);
			return repository.save(result);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
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

	private void updateObj(Tag result, Tag obj) {
		result.setNome(obj.getNome());
		if (obj.getArtigo() != null) {
			result.setArtigo(obj.getArtigo());
		}
	}
}
