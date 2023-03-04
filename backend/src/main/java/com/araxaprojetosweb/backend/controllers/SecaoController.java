package com.araxaprojetosweb.backend.controllers;

import java.net.URI;
import java.util.List;

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

import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.dto.SecaoDto;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoFull;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoSingle;
import com.araxaprojetosweb.backend.entities.services.SecaoServices;

@RestController
@RequestMapping("/section")
public class SecaoController {
	@Autowired
	private SecaoServices services; 
	
	@GetMapping
	public ResponseEntity<List<Secao>> findAll(){
		List<Secao> lista = services.findAll();
		return ResponseEntity.ok().body(lista);
	}
	@GetMapping(value = "/categoria/single/{categoria_id}")
	public ResponseEntity<List<ISecaoProjecaoSingle>> findByCategoriaSingle(@PathVariable Integer categoria_id){
		List<ISecaoProjecaoSingle> lista = services.findByCategoriaSingle(categoria_id);
		lista.forEach(System.out::println);//teste
		return ResponseEntity.ok().body(lista);
	}
	@GetMapping(value = "/categoria/full/{categoria_id}")
	public ResponseEntity<List<ISecaoProjecaoFull>> findByCategoriaFull(@PathVariable Integer categoria_id){
		List<ISecaoProjecaoFull> lista = services.findByCategoriaFull(categoria_id);
		lista.forEach(System.out::println);//teste
		return ResponseEntity.ok().body(lista);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<SecaoDto> findById(@PathVariable Integer id){
		Secao obj = services.findById(id);
		return ResponseEntity.ok().body(new SecaoDto(obj));
	}
	@PostMapping
	public ResponseEntity<SecaoDto> insert(@RequestBody SecaoDto dto){
		Secao secao = services.insert(dto);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(secao.getId()).toUri();
		return ResponseEntity.created(location).body(new SecaoDto(secao));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Integer id){
		services.remove(id);
		return ResponseEntity.noContent().build();
	}
	@PutMapping(value = "/{id}")
	public ResponseEntity<SecaoDto> update(@PathVariable Integer id, @RequestBody SecaoDto dto){
		Secao secao = services.update(id, dto);
		return ResponseEntity.ok().body(new SecaoDto(secao));
	}
}
