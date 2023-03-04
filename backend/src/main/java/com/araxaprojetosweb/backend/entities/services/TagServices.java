package com.araxaprojetosweb.backend.entities.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.dto.TagDto;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.TagRepository;

@Service
public class TagServices {
	@Autowired
	private TagRepository repository;
	
	@Autowired
	private ArtigoRepository artRepository;

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
	public Tag insert(TagDto obj) {
		Artigo artigo = artRepository.getReferenceById(obj.getArtigo_id());
		if (artigo == null) {
			throw new ResourceNotFoundException("Artigo Not Found");
		}
		Tag tag = new Tag(obj.getId(), obj.getNome(), artigo);
		return repository.saveAndFlush(tag);
	}

	@Transactional
	public Tag update(Long id, TagDto obj) {
		Artigo artigo = artRepository.getReferenceById(obj.getArtigo_id());
		if (artigo == null) {
			throw new ResourceNotFoundException("Artigo Not Found");
		}
		
		try {
			Tag tag = repository.getReferenceById(id);
			updateObj(tag, obj, artigo);
			return repository.save(tag);
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
		}catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void updateObj(Tag tag, TagDto obj, Artigo artigo) {
		tag.setNome(obj.getNome());
		tag.setArtigo(artigo);		
	}
}
