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

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Autor;
<<<<<<< HEAD
import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.AutorRepository;
=======
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoCategoriaProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoOfAutorProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoRecentsProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IComentarioProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.ITagProjecao;
import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.AutorRepository;
import com.araxaprojetosweb.backend.repositories.CategoriaRepository;
import com.araxaprojetosweb.backend.repositories.SecaoRepository;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

@Service
public class ArtigoServices {

	@Autowired
	private ArtigoRepository artRepository;

	@Autowired
	private AutorRepository autRepository;

<<<<<<< HEAD
	@Transactional(readOnly = true)
	public List<ArtigoDto> findAll() {
		List<Artigo> lista = artRepository.findAll();
		return ArtigoDto.toConvert(lista);
=======
	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private SecaoRepository secaoRepository;

	@Transactional(readOnly = true)
	public List<IArtigoRecentsProjecao> findLimitPosts(Long intervalo) {
		List<IArtigoRecentsProjecao> recents = artRepository.findLimitPosts(intervalo);
		return recents;
	}

	@Transactional(readOnly = true)
	public List<IArtigoOfAutorProjecao> findAllbyArtigoAutor(String url) {
		List<IArtigoOfAutorProjecao> page = artRepository.findAllbyArtigoAutor(url);
		return page;
	}

	@Transactional(readOnly = true)
	public List<IArtigoCategoriaProjecao> findCategoryByArtigo(Integer categoria_id) {
		List<IArtigoCategoriaProjecao> page = artRepository.findCategoryByArtigo(categoria_id);
		return page;
	}

	@Transactional(readOnly = true)
	public List<ITagProjecao> findTabByArtigo(Integer artigo_id) {
		List<ITagProjecao> tag = artRepository.findTabByArtigo(artigo_id);
		return tag;
	}

	@Transactional(readOnly = true)
	public List<IComentarioProjecao> findCommentByArtigo(Integer artigo_id) {
		List<IComentarioProjecao> comment = artRepository.findCommentByArtigo(artigo_id);
		return comment;
	}

	@Transactional(readOnly = true)
	public Page<ArtigoDto> findAll(Pageable pageable) {
		Page<Artigo> lista = artRepository.findAll(pageable);
		Page<ArtigoDto> page = lista.map(x -> new ArtigoDto(x));
		// return ArtigoDto.toConvert(lista);
		return page;
	}

	/*
	 * @Transactional(readOnly = true) public Page<ArtigoDto> findByCategorias(Long
	 * categoria_id, Pageable pageable) { Page<Artigo> lista =
	 * artRepository.findByCategorias(categoria_id, pageable); Page<ArtigoDto> page
	 * = lista.map(x -> new ArtigoDto(x)); //return ArtigoDto.toConvert(lista);
	 * return page; }
	 */

	@Transactional(readOnly = true)
	public Page<ArtigoDto> findByCategoria(Categoria categoria, Pageable pageable) {
		Page<ArtigoDto> list = artRepository.findByCategoria(categoria, pageable);
		return list;
	}
	
	@Transactional(readOnly = true)
	public Page<ArtigoDto> findByCategoriaAndAutor(Categoria categoria, Autor autor, Pageable pageable){
		Page<ArtigoDto> result = artRepository.findByCategoriaAndAutor(categoria, autor, pageable);
		return result;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	}

	@Transactional(readOnly = true)
	public ArtigoDto findById(Long id) {
		Optional<Artigo> dto = artRepository.findById(id);
		return new ArtigoDto(dto.orElseThrow(() -> new ResourceNotFoundException(id)));
	}

	@Transactional
	public ArtigoDto insert(ArtigoDto dto) {
		Autor autor = autRepository.findByEmail(dto.getAutor().getEmail()).get();
<<<<<<< HEAD
=======
		Optional<Categoria> categoria = categoriaRepository.findById(dto.getCategorias().getId());

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
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
<<<<<<< HEAD
		artigo.setAutor(autor);
=======
		
		if (dto.getSecao().getId() != null) {
			Secao secao = secaoRepository.findById(dto.getSecao().getId())
					.orElse(new Secao());	
			artigo.setSecao(secao);
		}
		
		artigo.setAutor(autor);
		artigo.setCategoria(categoria.get());
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
		artigo = artRepository.saveAndFlush(artigo);

		return new ArtigoDto(artigo);

	}

	@Transactional
	public ArtigoDto update(Long id, ArtigoDto dto) {
<<<<<<< HEAD
		Autor autor = autRepository.findById(dto.getAutor().getId()).get();
		Artigo artigo = artRepository.getReferenceById(id);
		preencheArtigo(artigo, dto);
		artigo.setAutor(autor);
		artigo = artRepository.saveAndFlush(artigo);

		try {
=======
		Autor autor;
		Artigo artigo;
		Categoria cat;
		try {
			autor = autRepository.findById(dto.getAutor().getId()).get();
			artigo = artRepository.getReferenceById(id);
			cat = categoriaRepository.findById(dto.getCategorias().getId()).get();
			preencheArtigo(artigo, dto);
			artigo.setCategoria(cat);
			artigo.setAutor(autor);
			artigo = artRepository.saveAndFlush(artigo);
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
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
<<<<<<< HEAD
		}catch (EmptyResultDataAccessException e) {
=======
		} catch (EmptyResultDataAccessException e) {
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
			throw new ResourceNotFoundException(e.getMessage());
		}
	}

	private void preencheArtigo(Artigo artigo, ArtigoDto dto) {
		artigo.setTitulo(dto.getTitulo());
		artigo.setDataPublicacao(dto.getDataPublicacao());
<<<<<<< HEAD
		artigo.setConteudo(dto.getConteudo());
		artigo.setStatus(dto.getStatus());
		artigo.setUrl(dto.getUrl());
=======
		artigo.setConteudoIntroducao(dto.getConteudoIntroducao());
		artigo.setConteudoParagrafoOne(dto.getConteudoParagrafoOne());
		artigo.setConteudoParagrafoTwo(dto.getConteudoParagrafoTwo());
		artigo.setConteudoConclusao(dto.getConteudoConclusao());
		artigo.setStatus(dto.getStatus());
		artigo.setUrl(dto.getUrl());
		artigo.setSlog(dto.getSlog());
		artigo.setImgDestaque(dto.getImgDestaque());
		artigo.setImgCard(dto.getImgCard());
		artigo.setContador(dto.getContador());

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	}

}
