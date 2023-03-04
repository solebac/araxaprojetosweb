package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.dto.SecaoDto;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoFull;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoSingle;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.CategoriaRepository;
import com.araxaprojetosweb.backend.repositories.SecaoRepository;

@Service
public class SecaoServices {
	@Autowired
	private SecaoRepository repository;

	@Autowired
	private CategoriaRepository catRepository;

	@Transactional(readOnly = true)
	public List<Secao> findAll() {
		List<Secao> lista = repository.findAll();
		return lista;
	}
	
	@Transactional(readOnly = true)
	public List<ISecaoProjecaoSingle> findByCategoriaSingle(Integer categoria_id) {
		List<ISecaoProjecaoSingle> lista = repository.findByCategoriaSingle(categoria_id);
		return lista;
	}
	
	@Transactional(readOnly = true)
	public List<ISecaoProjecaoFull> findByCategoriaFull(Integer categoria_id) {
		List<ISecaoProjecaoFull> lista = repository.findByCategoriaFull(categoria_id);
		return lista;
	}

	@Transactional(readOnly = true)
	public Secao findById(Integer id) {
		Optional<Secao> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public void remove(Integer id) {

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

	@Transactional
	public Secao insert(SecaoDto dto) {
		Categoria cat = catRepository.getReferenceById(dto.getCategoria_id());
		if (cat == null) {
			cat = new Categoria(null, "Desconhecido-" + dto.getNome(), "Cadastro Manual");
			catRepository.saveAndFlush(cat);
		}
		Secao secao = new Secao(null, dto.getNome(), cat);
		return repository.save(secao);
	}

	@Transactional
	public Secao update(Integer id, SecaoDto dto) {
		Categoria cat = catRepository.getReferenceById(dto.getCategoria_id());
		if (cat == null) {
			cat = new Categoria(null, "Desconhecido-" + dto.getNome(), "Cadastro Manual");
			catRepository.saveAndFlush(cat);
		}
		
		try {
			Secao secao = repository.getReferenceById(id);
			updateObj(secao, dto, cat);
			return repository.save(secao);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void updateObj(Secao secao, SecaoDto dto, Categoria cat) {
		secao.setNome(dto.getNome());
		secao.setCategoria(cat);
	}
}
