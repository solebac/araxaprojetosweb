package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.AutorDto;
import com.araxaprojetosweb.backend.entities.dto.CategoriaDto;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.CategoriaRepository;

@Service
public class CategoriaServices {

	@Autowired
	private CategoriaRepository repository;

	@Transactional(readOnly = true)
	public List<CategoriaDto> findAll() {
		List<Categoria> obj = repository.findAll();
		return CategoriaDto.toConvert(obj);

	}

	@Transactional(readOnly = true)
	public List<CategoriaDto> findByNome(String nome) {
		List<Categoria> obj = repository.findByNome(nome);
		return CategoriaDto.toConvert(obj);

	}

	@Transactional(readOnly = true)
	public CategoriaDto findById(Long id) {
		Optional<Categoria> obj = repository.findById(id);
		if (!obj.isPresent()) {
			return null;
		}
		CategoriaDto dto = new CategoriaDto(obj.get());
		return dto;

	}

	@Transactional
	public Categoria insert(Categoria obj) {
		return repository.save(obj);
	}

	@Transactional
	public Categoria atualizar(Long id, CategoriaDto obj) {
		try {
			Categoria result = repository.getReferenceById(id);
			updateObj(result, obj);
			return repository.save(result);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	public void remover(Long id) {
		try {
			repository.deleteById(id);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void updateObj(Categoria result, CategoriaDto obj) {
		result.setNome(obj.getNome());
		result.setDescricao(obj.getDescricao());
	}

	@Transactional(readOnly = true)
	public Page<CategoriaDto> findAllPage(Pageable pageable) {
		Page<Categoria> result = repository.findAll(pageable);
		Page<CategoriaDto> objPage = result.map(x -> new CategoriaDto(x));
		return objPage;
	}
}
