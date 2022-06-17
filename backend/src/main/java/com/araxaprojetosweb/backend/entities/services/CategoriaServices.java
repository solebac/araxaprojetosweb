package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.CategoriaDto;
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
		Categoria result = repository.getReferenceById(id);
		updateObj(result, obj);
		return repository.save(result);
	}
	
	@Transactional
	public void remover(Long id) {
		repository.deleteById(id);
	}

	private void updateObj(Categoria result, CategoriaDto obj) {
		result.setNome(obj.getNome());
		result.setDescricao(obj.getDescricao());
	}
}
