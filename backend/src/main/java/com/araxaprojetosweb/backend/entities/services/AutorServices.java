package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
<<<<<<< HEAD
=======
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Autor;
<<<<<<< HEAD
=======
import com.araxaprojetosweb.backend.entities.dto.AutorDto;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
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
<<<<<<< HEAD
=======
	public Page<AutorDto> findAllPage(Pageable pageable) {
		Page<Autor> result = repository.findAll(pageable);
		Page<AutorDto> objPage = result.map(x -> new AutorDto(x));
		return objPage;
	}

	@Transactional(readOnly = true)
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public Autor findById(Long id) {
		Optional<Autor> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public Autor insert(Autor obj) {
<<<<<<< HEAD
		return repository.save(obj);
=======
		try {
			return repository.save(obj);
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	}

	@Transactional
	public Autor atualizar(Long id, Autor obj) {
		try {
			Autor result = repository.getReferenceById(id);
			updateObj(result, obj);
			return repository.save(result);
<<<<<<< HEAD
			
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
=======

		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
		}
	}

	public void remover(Long id) {
		try {
			repository.deleteById(id);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
<<<<<<< HEAD
		}catch (EmptyResultDataAccessException e) {
=======
		} catch (EmptyResultDataAccessException e) {
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
			throw new ResourceNotFoundException(e.getMessage());
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
