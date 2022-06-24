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
import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.AutorRepository;

@Service
public class ArtigoServices {

	@Autowired
	private ArtigoRepository artRepository;

	@Autowired
	private AutorRepository autRepository;

	@Transactional(readOnly = true)
	public List<ArtigoDto> findAll() {
		List<Artigo> lista = artRepository.findAll();
		return ArtigoDto.toConvert(lista);
	}

	@Transactional(readOnly = true)
	public ArtigoDto findById(Long id) {
		Optional<Artigo> dto = artRepository.findById(id);
		return new ArtigoDto(dto.orElseThrow(() -> new ResourceNotFoundException(id)));
	}

	@Transactional
	public ArtigoDto insert(ArtigoDto dto) {
		Autor autor = autRepository.findByEmail(dto.getAutor().getEmail()).get();
		if (autor == null) {
			autor = new Autor();
			autor.setNome("Desconhecido");
			autor.setEmail(dto.getAutor().getEmail());
			autor.setUsuario("Desconhecido");
			autor.setFoto("c:\\temp\\");
			autRepository.saveAndFlush(autor);
		}
		Artigo artigo = new Artigo();
		preencheArtigo(artigo, dto);
		artigo.setAutor(autor);
		artigo = artRepository.saveAndFlush(artigo);

		return new ArtigoDto(artigo);

	}

	@Transactional
	public ArtigoDto update(Long id, ArtigoDto dto) {
		Autor autor = autRepository.findById(dto.getAutor().getId()).get();
		Artigo artigo = artRepository.getReferenceById(id);
		preencheArtigo(artigo, dto);
		artigo.setAutor(autor);
		artigo = artRepository.saveAndFlush(artigo);

		try {
			return new ArtigoDto(artigo);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	public void remover(Long id) {
		try {
			artRepository.deleteById(id);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(e.getMessage());
		} catch (DataIntegrityViolationException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void preencheArtigo(Artigo artigo, ArtigoDto dto) {
		artigo.setTitulo(dto.getTitulo());
		artigo.setDataPublicacao(dto.getDataPublicacao());
		artigo.setConteudo(dto.getConteudo());
		artigo.setStatus(dto.getStatus());
		artigo.setUrl(dto.getUrl());
	}

}
