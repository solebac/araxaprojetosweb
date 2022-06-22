package com.araxaprojetosweb.backend.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.services.ArtigoServices;

@RestController
@RequestMapping("/articles")
public class ArtigoController {

	@Autowired
	private ArtigoServices services;

	@GetMapping
	public ResponseEntity<List<ArtigoDto>> findAll() {
		List<ArtigoDto> result = services.findAll();
		return ResponseEntity.ok().body(result);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ArtigoDto> findById(@PathVariable Long id) {
		ArtigoDto result = services.findById(id);
		return ResponseEntity.ok().body(result);
	}

	@PostMapping
	public ResponseEntity<ArtigoDto> insert(@RequestBody ArtigoDto dto) {
		ArtigoDto result = services.insert(dto);
		URI localUri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(localUri).body(result);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<ArtigoDto> update(@PathVariable Long id, @RequestBody @Valid ArtigoDto dto) {
		ArtigoDto result = services.update(id, dto);
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		services.remover(id);
		return ResponseEntity.noContent().build();
	}

}
