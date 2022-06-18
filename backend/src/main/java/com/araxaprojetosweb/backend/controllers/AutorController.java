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

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.dto.AutorDto;
import com.araxaprojetosweb.backend.entities.services.AutorServices;

@RestController
@RequestMapping("/autor")
public class AutorController {

	@Autowired
	private AutorServices services;
	
	@GetMapping
	public ResponseEntity<List<AutorDto>> findAll(){
		List<Autor> obj = services.findAll();
		return ResponseEntity.ok().body(AutorDto.toConvert(obj));
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<AutorDto> findById(@PathVariable Long id){
		AutorDto obj = AutorDto.toConvertId(services.findById(id));
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping
	public ResponseEntity<AutorDto> insert(@RequestBody @Valid Autor obj){
		Autor autor = services.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(autor.getId()).toUri();
		return ResponseEntity.created(uri).body(new AutorDto(autor));
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<AutorDto> update(@PathVariable Long id, @RequestBody Autor obj){
		Autor autor = services.atualizar(id, obj);
		return ResponseEntity.ok().body(new AutorDto(autor));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id){
		services.remover(id);
		return ResponseEntity.noContent().build();
	}

}
