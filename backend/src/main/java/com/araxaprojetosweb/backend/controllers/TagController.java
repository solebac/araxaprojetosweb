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

import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.dto.TagDto;
import com.araxaprojetosweb.backend.entities.services.TagServices;

@RestController
@RequestMapping("/tag")
public class TagController {
	@Autowired
	private TagServices services;

	@GetMapping
	public ResponseEntity<List<Tag>> findAll() {
		List<Tag> lista = services.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Tag> findById(@PathVariable Long id) {
		Tag result = services.findById(id);
		return ResponseEntity.ok().body(result);
	}

	@PostMapping
	public ResponseEntity<TagDto> insert(@RequestBody @Valid Tag obj) {
		Tag result = services.insert(obj);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId())
				.toUri();
		return ResponseEntity.created(location).body(new TagDto(result));
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<TagDto> update(@PathVariable Long id, @RequestBody @Valid Tag obj) {
		Tag result = services.update(id, obj);
		return ResponseEntity.ok().body(new TagDto(result));
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		services.remover(id);
		return ResponseEntity.noContent().build();
	}
}
