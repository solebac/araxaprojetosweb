package com.araxaprojetosweb.backend.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
=======
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.CategoriaDto;
import com.araxaprojetosweb.backend.entities.services.CategoriaServices;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaServices services;

	@GetMapping
	public ResponseEntity<List<CategoriaDto>> findAll(String nome) {
		List<CategoriaDto> obj;
		if (nome == null) {// Caso Param da URL
			obj = services.findAll();
		} else {
			obj = services.findByNome(nome);
		}
		return ResponseEntity.ok().body(obj);
	}
<<<<<<< HEAD
=======
	
	@GetMapping(path = "/paginacao")
	public ResponseEntity<Page<CategoriaDto>> findAllPage(Pageable pageable){
		Page<CategoriaDto> result = services.findAllPage(pageable);
		return ResponseEntity.ok().body(result);
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	@GetMapping(value = "/{id}")
	public ResponseEntity<CategoriaDto> findById(@PathVariable Long id) {
		CategoriaDto obj = services.findById(id);
		if (obj == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<CategoriaDto> cadastrar(@RequestBody @Valid Categoria obj, UriComponentsBuilder uriBuilder) {
		Categoria result = services.insert(obj);
		URI uri = uriBuilder.path("/categoria/{id}").buildAndExpand(result.getId()).toUri();
		return ResponseEntity.created(uri).body(new CategoriaDto(result));
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<CategoriaDto> atualizar(@PathVariable Long id, @RequestBody CategoriaDto obj){
		Categoria result = services.atualizar(id, obj);
		return ResponseEntity.ok().body(new CategoriaDto(result));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id){
		services.remover(id);
		return ResponseEntity.noContent().build();
	}

}
