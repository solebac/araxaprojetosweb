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
import com.araxaprojetosweb.backend.entities.Comentario;
import com.araxaprojetosweb.backend.entities.dto.ComentarioDto;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.ComentarioRepository;

@Service
public class ComentarioServices {
	@Autowired
	private ComentarioRepository cmtrepository;

	@Autowired
	private ArtigoRepository artRepository;

	@Transactional(readOnly = true)
	public List<Comentario> findAll() {
		List<Comentario> obj = cmtrepository.findAll();
		return obj;
	}

	@Transactional(readOnly = true)
	public Comentario findById(Long id) {
		Optional<Comentario> obj = cmtrepository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public Comentario insert(ComentarioDto obj) {
		Artigo artigo = artRepository.getReferenceById(obj.getId_artigo_comment());
		if (artigo == null) {
			throw new ResourceNotFoundException("Artigo Not Found");
		}
		Comentario comment = new Comentario(null, obj.getNome(), obj.getTexto(), obj.getData(), artigo);
		return cmtrepository.saveAndFlush(comment);
	}

	@Transactional
	public Comentario update(Long id, ComentarioDto obj) {
		Artigo artigo = artRepository.getReferenceById(obj.getId_artigo_comment());
		if (artigo == null) {
			throw new ResourceNotFoundException("Artigo Not Found");
		}
		try {
			Comentario comment = cmtrepository.getReferenceById(id);
			updateObj(comment, obj, artigo);
			return cmtrepository.save(comment);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	public void remover(Long id) {
		try {
			cmtrepository.deleteById(id);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void updateObj(Comentario comment, ComentarioDto obj, Artigo artigo) {

		comment.setNome(obj.getNome());
		comment.setData(obj.getData());
		comment.setTexto(obj.getTexto());
		comment.setArtigo(artigo);

	}

}
