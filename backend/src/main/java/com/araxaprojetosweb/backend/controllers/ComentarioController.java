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

import com.araxaprojetosweb.backend.entities.Comentario;
import com.araxaprojetosweb.backend.entities.dto.ComentarioDto;
import com.araxaprojetosweb.backend.entities.services.ComentarioServices;

@RestController
@RequestMapping("/comment")
public class ComentarioController {
	@Autowired
	private ComentarioServices services;

	@GetMapping
	public ResponseEntity<List<Comentario>> findAll() {
		return ResponseEntity.ok().body(services.findAll());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Comentario> findById(@PathVariable Long id) {
		Comentario result = services.findById(id);
		return ResponseEntity.ok().body(result);
	}

	@PostMapping
	public ResponseEntity<ComentarioDto> insert(@RequestBody @Valid ComentarioDto dto) {
		Comentario obj = services.insert(dto);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId())
				.toUri();
		return ResponseEntity.created(location).body(new ComentarioDto(obj));
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<ComentarioDto> update(@PathVariable Long id, @RequestBody @Valid ComentarioDto dto) {
		Comentario result = services.update(id, dto);
		return ResponseEntity.ok().body(new ComentarioDto(result));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id){
		services.remover(id);
		return ResponseEntity.noContent().build();
	}
	
}
